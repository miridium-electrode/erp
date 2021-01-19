import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import './style.scss';

function Jadwalkerja() {
    return (
        <Background forPage="jadwalkerja">
        <Navbar/>
        <Container forPage="jadwalkerja">
            <div className="buttons">
                <button>+</button>
                <button>&#60;</button>
                <button>&#62;</button>
            </div>
            <table>
            <tr>
                <th>...</th>
                <th>Nama</th>
                <th>Berlaku mulai</th>
                <th>Digunakan</th>
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

export default Jadwalkerja;
