import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function Userslist() {
    return (
        <Background forPage="other">
            <Navbar forPage="e"/>
            <Container forPage="userslist">
                <div className="part1">
                    <div>Bulan</div>
                    <button className="bulan"></button>
                    <button className="left"></button>
                    <button className="right"></button>
                    <button className="download">Download</button>
                </div>
                <div className="part2">
                    <select></select>
                    <select></select>
                    <select></select>
                </div>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Departemen</th>
                        <th>Jabatan</th>
                        <th></th>
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

export default Userslist;
