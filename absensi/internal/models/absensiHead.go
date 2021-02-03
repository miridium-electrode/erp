package models

import "time"

// model that describe header of absension data
type Absensi_head struct {
	IdAbs string
	IdKar string
	Tgl time.Time
}
