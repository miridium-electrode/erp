package main

import (
	"syreclabs.com/go/faker"
	"gorm.io/gorm"
	"log"
	"fmt"
	"gorm.io/driver/sqlite"
	"miridium_electrode/session/internal/model"
)

func main() {
	db, err := gorm.Open(sqlite.Open("/home/arfe/arfchive/personalliking/learn_to_dev/big-project/erp/session/login.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("connection failed: ", err)
		return
	}

	for i := 0; i < 20; i++ {
		loginInfo := model.Login{
			ID: faker.Bitcoin().Address(),
			Username: faker.Internet().UserName(),
			Password: faker.Internet().Password(8, 14),
		}

		db.Create(&loginInfo)
	}
	fmt.Println("finished seeding database")
}
