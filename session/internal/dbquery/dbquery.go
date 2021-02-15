package dbquery

import (
	"miridium_electrode/session/internal/dbconn"
	"miridium_electrode/session/internal/model"
)

// take username and password from request body and than compare it to database
// return false if username and password is invalid
func DbAuthenticateUser(u, p string) (bool) {
	res := struct{
		username string
		password string
	}{}
	dbres := dbconn.Startconn().Table("logins").Select("username", "password").Where("username = ? AND password = ?", u, p).Scan(&res)
	if dbres.RowsAffected != 1 {
		return false
	}

	return true
}

func DbGetID(u, p string) (string, bool) {
	var id string
	var exist bool
	dbconn.Startconn().Model(&model.Login{}).Where("username = ? AND password = ?", u, p).Select("id").Row().Scan(&id)
	if id == "" {
		exist = false
		return id, exist
	}
	exist = true
	return id, exist
}
