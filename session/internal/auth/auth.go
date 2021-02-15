package auth

import (
	"net/http"
	"encoding/json"
	"time"
	"miridium_electrode/session/internal/dbquery"
	jwt "github.com/dgrijalva/jwt-go"
)

// store jwt token and then converted to json
type M map[string]interface{}

// Representation of jwt data
type MyClaim struct {
	jwt.StandardClaims
	ID string
	Username string `json:"username"`
}

var APPLICATION_NAME = "session of erp"
var LOGIN_EXPIRATION_DURATION = time.Duration(1) * time.Hour
var JWT_SIGNING_METHOD = jwt.SigningMethodHS256
var JWT_SIGNATURE_KEY = []byte("the secret of kalimdor")

// Accept post request of username and password, and then return a cookie of json web token
func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "OPTIONS, POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	switch r.Method {
	  case "OPTIONS":
		  w.Write([]byte("allowed"))
		  return
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

		ok := dbquery.DbAuthenticateUser(payload.Username, payload.Password)
		  if !ok == true {
			  http.Error(w, "invalid username or password", http.StatusBadRequest)
			  return
		  }

		id, exist := dbquery.DbGetID(payload.Username, payload.Password)
		if !exist == true {
			http.Error(w, "invalid username or password", http.StatusBadRequest)
			return
		}
		  claims := MyClaim {
			  StandardClaims: jwt.StandardClaims{
				  Issuer:    APPLICATION_NAME,
				  ExpiresAt: time.Now().Add(LOGIN_EXPIRATION_DURATION).Unix(),
			  },
			  ID: id,
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

		setCookie(w, r, signedToken)
		var msg string = "welcome " + payload.Username
		reserr := json.NewEncoder(w).Encode(M{"message": msg})
		if reserr != nil {
			http.Error(w, reserr.Error(), http.StatusInternalServerError)
		}
	  default:
		  http.Error(w, "unsupported http method", http.StatusBadRequest)
	}
}


// set user cookie in form of jwt
func setCookie(w http.ResponseWriter, r *http.Request, st string) {
	cookieName := "token"
	c := &http.Cookie{}

	if storedCookie, _ := r.Cookie(cookieName); storedCookie != nil {
		c = storedCookie
	}

	if c.Value == "" {
		c := &http.Cookie{
			Name: cookieName,
			Value: st,
			Expires: time.Now().Add(LOGIN_EXPIRATION_DURATION),
		}
		http.SetCookie(w, c)
	}
}
