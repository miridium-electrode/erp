package conn

import (
	"log"
	"miridium_electrode/absensi/confighelper"

	"github.com/jmoiron/sqlx"
)

func StartConn() *sqlx.DB {
	envConfig, err := confighelper.InitConfig(".")
	if err != nil {
		log.Fatalf("cannot open config, %s", err.Error())
	}
	db, err := sqlx.Open(envConfig.DBDriver, envConfig.DBName)
	if err != nil {
		log.Fatalf("Cannot open database, %s", err.Error())
	}

	return db
}
