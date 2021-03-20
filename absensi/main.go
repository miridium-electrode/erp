package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"miridium_electrode/absensi/http/absen"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/absensihead", absen.AcceptAbsensiHead)
	mux.HandleFunc("/absensidetail", absen.AcceptAbsensiDetail)
	var handler http.Handler = mux

	server := &http.Server{
		Addr: ":8001",
		Handler: handler,
	}

	log.Println("Server is listening at port", server.Addr)
	server.ListenAndServe()
}
