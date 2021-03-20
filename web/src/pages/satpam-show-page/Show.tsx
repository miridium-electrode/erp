import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function Show() {
    return (
        <Background forPage="other">
            <Navbar forPage="e"/>
            <Container forPage="show">
                <div className="select-menu"></div>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Masuk</th>
                        <th>Keluar</th>
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

export default Show;
