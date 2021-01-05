import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import './style.scss';

function Detailabsen() {
    return (
        <Background forPage="other">
            <Navbar/>
            <Container forPage="karyawantabel">
                <table>
                    <tr>
                        <th>Hari</th>
                        <th>Masuk</th>
                        <th>Keluar</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </Container>
        </Background>
    );
}

export default Detailabsen;
