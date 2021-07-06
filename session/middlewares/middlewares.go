package middlewares

import (
	"net/http"
)

type MiddlewareAggregate func(http.Handler) http.Handler

func Run(next http.Handler, middlewares ...MiddlewareAggregate) http.Handler {
	var midarr []MiddlewareAggregate
	midarr = append(midarr, middlewares...)

	for i := len(midarr) - 1; i >= 0; i-- {
		next = midarr[i](next)
	}

	return next
}
