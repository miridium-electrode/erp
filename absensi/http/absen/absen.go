package absen

import (
	"encoding/json"
	"net/http"
)

type AbsenMulai struct {
	JamMulai string `json:"jam mulai"`
}

type AbsenSelesai struct {
	JamSelesai string `json:"jam selesai"`
}

func Absen(rw http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "OPTIONS":
		rw.Write([]byte("Allowed"))
		return
	case "POST":
		decoder := json.NewDecoder(r.Body)
		var payload AbsenMulai
		if err := decoder.Decode(&payload); err != nil {
			http.Error(rw, err.Error(), http.StatusInternalServerError)
		}
	default:
		http.Error(rw, "http method not supported", http.StatusBadRequest)
	}
}

