package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"path"

	"github.com/jmoiron/sqlx"
	"github.com/spf13/viper"
)

type AbsensiHead struct {
	IdAbsen string `json:"id absen"`
	IdKar string `json:"id kar"`
	Tgl string `json:"tgl"`
}

type AbsensiDetail struct {
	IdAbsen string `json:"id absen"`
	IdAtasan string `json:"id atasan"`
	JamMulai string `json:"jam mulai"`
	JamSelesai string `json:"jam selesai"`
	IdTipe string `json:"id tipe"`
	Keterangan string `json:"keterangan"`
	Lampiran string `json:"lampiran"`
}

type EnvConfig struct {
	DBDriver string `mapstructure:"DBDRIVER"`
	DBPath string `mapstructure:"DBPATH"`
	DBName string `mapstructure:"DBNAME"`
	Username string `mapstructure:"DBUSERNAME"`
	Password string `mapstructure:"DBPASSWORD"`
}

func acceptAbsensiHead(rw http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "OPTIONS":
		rw.Write([]byte("Allowed"))
		return
	case "POST":
		decoder := json.NewDecoder(r.Body)
		var payload AbsensiDetail
		if err := decoder.Decode(&payload); err != nil {
			http.Error(rw, err.Error(), http.StatusInternalServerError)
		}
	default:
		http.Error(rw, "unsupported http method", http.StatusBadRequest)
		return
	}
}

func acceptAbsensiDetail(rw http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "OPTIONS":
		rw.Write([]byte("Allowed"))
		return
	case "POST":
		decoder := json.NewDecoder(r.Body)
		var payload AbsensiHead
		if err := decoder.Decode(&payload); err != nil {
			http.Error(rw, err.Error(), http.StatusInternalServerError)
		}
	default:
		http.Error(rw, "unsupported http method", http.StatusBadRequest)
		return
	}
}

func InitConfig(path string) (EnvConfig) {
	viper.SetConfigName(".env")
	viper.AddConfigPath(path)
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("Cannot load config or env, %s", err.Error())
	}

	var envConfig EnvConfig
	err := viper.Unmarshal(&envConfig)

	if  err != nil {
		log.Fatalf("error unmarshaling value: %s", err.Error())
	}

	return envConfig
}

func StartConn() *sqlx.DB {
	envConfig := InitConfig(".")
	db, err := sqlx.Open(envConfig.DBDriver, envConfig.DBName)
	if err != nil {
		log.Fatalf("Cannot open database, %s", err.Error())
	}

	return db
}

func Insert(dbname string, tablename interface{}, args interface{}) {
	StartConn().NamedExec(fmt.Sprintf("INSERT INTO %s (%s) VALUES (%s)", dbname, tablename, valuesname), args)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/absensihead", acceptAbsensiHead)
	mux.HandleFunc("/absensidetail", acceptAbsensiDetail)
	var handler http.Handler = mux

	server := &http.Server{
		Addr: ":8001",
		Handler: handler,
	}

	log.Println("Server is listening at port", server.Addr)
	server.ListenAndServe()
}
