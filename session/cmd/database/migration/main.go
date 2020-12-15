package main

import (
	"gorm.io/gorm"
	"gorm.io/driver/sqlite"
	"log"
	"miridium_electrode/session/internal/model"
	"fmt"
)

func main() {
	db, err := gorm.Open(sqlite.Open("/home/arfe/arfchive/personalliking/learn_to_dev/big-project/erp/session/login.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("fail to connect database: %v", err)
		return
	}
	db.AutoMigrate(&model.Login{})
	fmt.Println("Migrate successfully")
}
