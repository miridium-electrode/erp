CREATE TABLE absensi_head (
	id_absen TEXT,
	id_kar TEXT,
	tgl TEXT
);

CREATE TABLE absensi_detail (
	id_absen TEXT,
	id_atasan TEXT,
	jam_mulai INTEGER,
	jam_selesai INTEGER,
	id_tipe TEXT,
	keterangan TEXT,
	lampiran BLOB
);
