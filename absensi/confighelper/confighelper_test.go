package confighelper

import (
	"testing"
)

func TestInitConfig(t *testing.T) {
	const (
		dbdriver = "sqlite"
		dbpath   = "/home/git/erp/absensi"
	)
	envData, err := InitConfig(".", "..")
	if err != nil {
		t.Fatalf("Error while umarshalling value: %s", err.Error())
	}
	if envData.DBDriver != dbdriver {
		t.Errorf("expected dbdriver: %s, got %s\n", dbdriver, envData.DBDriver)
	}
	if envData.DBPath != dbpath {
		t.Errorf("expected dbpath: %s, got %s\n", dbpath, envData.DBPath)
	}
}
