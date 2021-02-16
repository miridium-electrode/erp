package main

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)


func TestAbsensiHead(t *testing.T) {
	jdata := []byte(`{"id absen": "1", "id kar":"adsnci", "tgl": "2021-03-01"}`)
	request, err := http.NewRequest("POST", "/absensihead", bytes.NewBuffer(jdata))
	if err != nil {
		t.Fatal(err.Error())
	}
	response := httptest.NewRecorder()
	acceptAbsensiHead(response, request)
	assert.Equalf(t, 200, response.Code, "Expected 200 http status, got: %v", response.Code)
}

func TestAbsensiDetail(t *testing.T) {
	jdata := []byte(`{"id absen": "1", "id atasan": "uiohiouoi", "jam mulai": "07:00", "jam selesai": "17:00", "id tipe": "1", "keterangan": "masuk", "lampiran": "uuyguguyu"}`)
	request, err := http.NewRequest("POST", "/absensidetail", bytes.NewBuffer(jdata))
	if err != nil {
		t.Fatal(err.Error())
	}
	response := httptest.NewRecorder()
	acceptAbsensiDetail(response, request)
	assert.Equalf(t, 200, response.Code, "Expected 200 http status, got: %v", response.Code)
}
