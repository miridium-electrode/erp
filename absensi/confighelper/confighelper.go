package confighelper

import (
	"log"

	"github.com/spf13/viper"
)

type EnvConfig struct {
	DBDriver string `mapstructure:"DBDRIVER"`
	DBPath   string `mapstructure:"DBPATH"`
	DBName   string `mapstructure:"DBNAME"`
	Username string `mapstructure:"DBUSERNAME"`
	Password string `mapstructure:"DBPASSWORD"`
}

func InitConfig(paths ...string) (EnvConfig, error) {
	viper.SetConfigName(".dev.env")
	viper.SetConfigType("env")
	for _, path := range paths {
		viper.AddConfigPath(path)
	}
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("Cannot load config or env, %s", err.Error())
	}

	var envConfig EnvConfig
	err := viper.Unmarshal(&envConfig)

	if err != nil {
		return EnvConfig{}, err
	}

	return envConfig, nil
}
