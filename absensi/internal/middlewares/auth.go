package middlewares

import "net/http"

// Read jwt cookie and compare it to database
func MiddlewareAuth(next http.Handler) {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// TODO: Read cookie to see the jwt
	})
}
