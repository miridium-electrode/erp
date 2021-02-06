package dbconn

import (
	"log"
	"os"
	"gorm.io/gorm"
	"gorm.io/driver/sqlite"
	"github.com/joho/godotenv"
)

func OpenConn() (*gorm.DB, error) {
	if err := godotenv.Load("../../.env"); err != nil {
		log.Fatal(err)
	}

	db, dberr := gorm.Open(sqlite.Open(os.Getenv("DBPATH")), &gorm.Config{})

	return db, dberr
}
