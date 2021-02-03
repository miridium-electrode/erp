package absen

import "net/http"

func WriteAbsen(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "OPTIONS, POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	switch r.Method {
	    case "OPTIONS":
		w.Write([]byte("allowed"))
		return
	    case "POST":
		
	}
}
