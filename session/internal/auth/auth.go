package auth

import (
	"net/http"
	"encoding/json"
	"miridium_electrode/session/internal/dbquery"
)

// Accept post request of username and password, and then return a cookie of json web token
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

		cookieComp := []string{id, username}
		setCookie(w, r, cookieComp)
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


// set user cookie
func setCookie(w http.ResponseWriter, r *http.Request, st []string) {
	c1 := &http.Cookie{
		Name: "uid",
		Value: st[0],
	}

	c2 := &http.Cookie {
		Name: "username",
		Value: st[1],
	}

	http.SetCookie(w, c1)
	http.SetCookie(w, c2)
}
