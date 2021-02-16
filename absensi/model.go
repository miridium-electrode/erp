package model

type AbsensiHead struct {
	IdAbsen string `db:"id_absen"`
	IdKar string `db:"id_kar"`
	tgl string `db:"tgl"`
}

type AbsensiDetail struct {
	IdAbsen string `db:"id_absen"`
	IdAtasan string `db:"id_atasan"`
	JamMulai int `db:"jam_mulai"`
	JamSelesai int `db:"jam_selesai"`
	IdTipe string `db:"id_tipe"`
	Keterangan string `db:"keterangan"`
	lampiran string
}
