import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function Laporan() {
    return (
        <Background forPage="other">
            <Navbar forPage="karyawan"/>
            <Container forPage="laporan">
                <div className="top-feature">
                    <div>Bulan</div>
                    <button className="bulan"></button>
                    <button className="left"></button>
                    <button className="right"></button>
                    <button className="download"></button>
                </div>
                <h2></h2>
                <table>
                    <tr>
                        <th>Masuk</th>
                        <th>Keluar</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </Container>
        </Background>
    );
}

export default Laporan;
