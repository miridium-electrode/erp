package dbconn

import (
	"gorm.io/gorm"
	"gorm.io/driver/sqlite"
)

func Startconn() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("/home/arfe/arfchive/personalliking/learn_to_dev/big-project/erp/session/login.db"), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	return db
}
