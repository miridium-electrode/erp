package models

import "time"

// models that describe karyawan table
type Karyawan struct {
	IdKar string
	Nama string
	TglLahir time.Time
	Alamat string
	IdJbt string
	IdTempatKerja string
	TglMasuk time.Time
	TglKeluar time.Time
}
