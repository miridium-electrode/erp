import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function Pesan() {
    return (
        <Background forPage="other">
            <Navbar forPage="karyawan"/>
            <Container forPage="pesan">
                <div className="checkbox">
                    
                </div>
                <div className="message">
                    
                </div>
            </Container>
        </Background>
    );
}

export default Pesan;
