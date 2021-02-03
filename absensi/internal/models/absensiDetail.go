package models

import "time"

// the data of absensi
type Absensi_detail struct {
	IdAbs string
	IdAtasan string
	JamMulai time.Time
	JamSelesai time.Time
	IdTipe time.Time
	Keterangan string
	Lampiran string
}
