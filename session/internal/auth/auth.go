package auth

import (
	"net/http"
	"encoding/json"
	"time"
	"miridium_electrode/session/internal/dbconn"
	jwt "github.com/dgrijalva/jwt-go"
)

type M map[string]interface{}

type MyClaim struct {
	jwt.StandardClaims
	Username string `json:"username"`
}

var APPLICATION_NAME = "session of erp"
var LOGIN_EXPIRATION_DURATION = time.Duration(1) * time.Hour
var JWT_SIGNING_METHOD = jwt.SigningMethodHS256
var JWT_SIGNATURE_KEY = []byte("the secret of kalimdor")


func Login(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		decoder := json.NewDecoder(r.Body)
		payload := struct{
			Username string `json:"username"`
			Password string `json:"password"`
		}{}
		if err := decoder.Decode(&payload); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		userDontExist := authenticateUser(payload.Username, payload.Password)
		if userDontExist == true {
			http.Error(w, "invalid username or password", http.StatusBadRequest)
			return
		}

		claims := MyClaim {
			StandardClaims: jwt.StandardClaims{
				Issuer:    APPLICATION_NAME,
				ExpiresAt: time.Now().Add(LOGIN_EXPIRATION_DURATION).Unix(),
			},
			Username: payload.Username,
		}

		token := jwt.NewWithClaims(
			JWT_SIGNING_METHOD,
			claims,
		)

		signedToken, tokerr := token.SignedString(JWT_SIGNATURE_KEY)
		if tokerr != nil {
			http.Error(w, tokerr.Error(), http.StatusBadRequest)
			return
		}

		reserr := json.NewEncoder(w).Encode(M{"token": signedToken})
		if reserr != nil {
			http.Error(w, reserr.Error(), http.StatusBadRequest)
			return
		}
	default:
		http.Error(w, "unsupported http method", http.StatusBadRequest)
	}
}

func authenticateUser(u, p string) (bool) {
	res := struct{
		username string
		password string
	}{}
	dbres := dbconn.Startconn().Table("logins").Select("username", "password").Where("username = ? AND password = ?", u, p).Scan(&res)
	if dbres.RowsAffected != 1 {
		return true
	}

	return false
}

