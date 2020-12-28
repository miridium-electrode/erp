import React from 'react';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Container from '../components/Container';

function AbsenPage() {
    return (
        <Background forPage="other">
            <Navbar/>
            <Container forPage="absen"> </Container>
        </Background>
    );
}

export default AbsenPage;
