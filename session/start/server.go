package main

import (
	"log"
	"miridium_electrode/session/endpoint"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.HandleFunc("/", endpoint.Authenticate).Methods("POST")
	log.Fatal(http.ListenAndServe(":8081", r))
}
