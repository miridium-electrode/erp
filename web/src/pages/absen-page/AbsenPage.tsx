import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import './style.scss';

function AbsenPage() {
    return (
        <Background forPage="other">
			<Navbar forPage="karyawan"/>
            <Container forPage="absen">
                <div className="box1">
                    <button className="masuk">Masuk</button>
                    <button className="keluar">Keluar</button>
                </div>
                <div className="box2">
                    <input type="text" name="header"/>
                    <select name="alasan">
                        <option value="sakit">Sakit</option>
                        <option value="menikah">Menikah</option>
                        <option value="dinasluar">Dinas Luar Kota</option>
                        <option value="dinasdalam">Dinas Dalam Kota</option>
                        <option value="alpha">Alpha</option>
                    </select>
                    <textarea></textarea>
                    <input type="file" name="lapiran"/>
                    <button>Submit</button>
                </div>
            </Container>
        </Background>
    );
}

export default AbsenPage;
