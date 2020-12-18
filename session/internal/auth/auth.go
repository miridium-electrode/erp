package auth

import (
	"net/http"
	"encoding/json"
)



func Login(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		decoder := json.NewDecoder(r.Body)
		payload := struct{
			Username string `json:"username"`
			Password string `json:"password"`
		}{}
		if err := decoder.Decode(&payload); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-type", "application/json")
		response := struct{
			Username string `json:"username"`
			Password string `json:"password"`
		} {
			Username: payload.Username,
			Password: payload.Password,
		}
		reserror := json.NewEncoder(w).Encode(response)
		if reserror != nil {
			http.Error(w, reserror.Error(), http.StatusInternalServerError)
			return
		}
	default:
		http.Error(w, "", http.StatusBadRequest)
	}
}

