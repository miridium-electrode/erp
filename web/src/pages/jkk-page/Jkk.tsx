import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import './style.scss';

function Jkk() {
    return (
        <Background forPage="other">
            <Navbar forPage="e"/>
            <Container forPage="jkk">
                <div className="helper-box">
                    <select></select>
                    <select></select>
                    <select></select>
                    <input type="search" name="namakar" />
                </div>
                <div className="helper-button">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <table>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </Container>
        </Background>
    );
}

export default Jkk;
