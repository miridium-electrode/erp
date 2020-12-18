package main

import (
	"net/http"
	"log"
	"miridium_electrode/session/internal/auth"
)

func main() {
	http.HandleFunc("/login", auth.Login)

	log.Println("Serving at http://localhost:8000")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
		return
	}
}
