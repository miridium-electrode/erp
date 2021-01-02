import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function AbsenPage() {
    return (
        <Background forPage="other">
            <Navbar/>
            <Container forPage="absen">
                <div className="box1">
                    
                </div>
                <div className="box2">
                    
                </div>
            </Container>
        </Background>
    );
}

export default AbsenPage;
