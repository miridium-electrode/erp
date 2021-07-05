package helper

import (
	"fmt"
	"strings"

	"miridium_electrode/absensi/database/conn"
)

// Insert database ignore db framework used
func Insert(tablename string, rowNames []string, args interface{}) {
	db := conn.StartConn()
	rowString, valueString := queryStringManipulator(rowNames)
	queryString := fmt.Sprintf("INSERT INTO %s (%s) VALUES (%s)", tablename, rowString, valueString)
	db.NamedExec(queryString, args)
}

func queryStringManipulator(rowNames []string) (rowString string, valueString string) {
	rowString = strings.Join(rowNames, ", ")
	var values []string
	for  _, r := range rowNames {
		values = append(values, fmt.Sprintf(":%s", r))
	}
	valueString = strings.Join(values, ", ")
	return
}
