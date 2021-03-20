package session

import (
	"encoding/json"
	"net/http"

)

type sess struct {
	id string
	name string
}

func CreateSession(rw http.ResponseWriter, r *http.Request) {
	var rsess sess

	err := json.NewDecoder(r.Body).Decode(&rsess)
	if err != nil {
		http.Error(rw, err.Error(), http.StatusBadRequest)
	}

	c_id := &http.Cookie{
		Name: "id",
		Value: rsess.id,
		HttpOnly: true,
		MaxAge: 86400,
	}

	c_name := &http.Cookie{
		Name: "username",
		Value: rsess.name,
		HttpOnly: true,
		MaxAge: 86400,
	}

	http.SetCookie(rw, c_id)
	http.SetCookie(rw, c_name)
}

func Logout(rw http.ResponseWriter, r *http.Request) {
	c_id, err1 := r.Cookie("id")
	c_name, err2 := r.Cookie("username")
	if err1 != nil {
		http.Error(rw, err1.Error(), http.StatusInternalServerError)
		return
	}
	if err2 != nil {
		http.Error(rw, err2.Error(), http.StatusInternalServerError)
		return
	}
	c_id.MaxAge = -1
	c_name.MaxAge = -1
}
