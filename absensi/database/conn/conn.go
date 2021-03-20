package conn

import (
	"log"

	"github.com/jmoiron/sqlx"
	"miridium_electrode/absensi/configHelper/configHelper"
)

func StartConn() *sqlx.DB {
	envConfig := configHelper.InitConfig(".")
	db, err := sqlx.Open(envConfig.DBDriver, envConfig.DBName)
	if err != nil {
		log.Fatalf("Cannot open database, %s", err.Error())
	}

	return db
}
