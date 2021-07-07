package endpoint

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Login struct {
	Uname string `json:"username"`
	Pwd   string `json:"password"`
}

func Authenticate(w http.ResponseWriter, r *http.Request) {
	var payload Login

	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&payload); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := fmt.Sprintf("u: %s, p: %s", payload.Uname, payload.Pwd)

	w.Write([]byte(response))
}
