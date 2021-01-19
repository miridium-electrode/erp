import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function Companyprofile() {
    return (
        <Background forPage="other">
            <Navbar/>
            <Container forPage="companyprofile">
                <h2></h2>
                <div></div>
            </Container>
        </Background>
    );
}

export default Companyprofile;
