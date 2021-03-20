package utils

import (
	"fmt"
	"net/http"
	"time"
)

func CreateID(aType string, r *http.Request) string {
	aType = strings.ToUpper(aType)
	nY := time.Now().Year()
	nM := int(time.Now().Month())
	nD := time.Now().Day()
	uid, err := r.Cookie("id");
	if(err != nil) {
		log.Fatal(err.Error())
	}
	fullId := fmt.Sprintf(
		"%s-%s%d%d%d", aType, uid, nY, nM, nD)
	return fullId
}
