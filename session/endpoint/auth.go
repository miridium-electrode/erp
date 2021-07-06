package endpoint

import (
	"net/http"
)

func Authenticate(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World"))
}
