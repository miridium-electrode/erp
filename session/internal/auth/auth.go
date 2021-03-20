package auth

import (
	"bytes"
	"encoding/json"
	"errors"
	"miridium_electrode/session/internal/dbquery"
	"net/http"
)

// Accept username and password header, then validate it
func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "OPTIONS, POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	switch r.Method {
	  case "OPTIONS":
		  w.Write([]byte("allowed"))
		  return
	  case "POST":
		username, password, ok := r.BasicAuth()

		if !ok {
			http.Error(w, "Invalid http header", http.StatusBadRequest)
			return
		}

		valid := dbquery.DbAuthenticateUser(username, password)

		if !valid {
			http.Error(w, "Invalid username or password", http.StatusBadRequest)
			return
		}

		id, exist := dbquery.DbGetID(username, password)
		if !exist == true {
			http.Error(w, "invalid username or password", http.StatusBadRequest)
			return
		}

		cookieComp := map[string]interface{}{
			"id": id,
			"username": username,
		}
		serr := setSession(cookieComp)
		if serr != nil {
			http.Error(w, serr.Error(), http.StatusInternalServerError)
		}
		var msg string = "welcome " + username
		mjson := map[string]interface{}{"message": msg}
		reserr := json.NewEncoder(w).Encode(mjson)
		if reserr != nil {
			http.Error(w, reserr.Error(), http.StatusInternalServerError)
		}
	  default:
		  http.Error(w, "unsupported http method", http.StatusBadRequest)
	}
}


// set user session
func setSession(st interface{}) error {
	reqbody, err := json.Marshal(st)
	if err != nil {
		return err
	}
	resp, err := http.Post("http://localhost:8081", "application/json", bytes.NewBuffer(reqbody))
	if err != nil {
		return err
	}

	if resp.StatusCode != 200 {
		return errors.New("Something is wrong")
	}
	defer resp.Body.Close()
	return nil
}
