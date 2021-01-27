import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import './style.scss';


function Jkkform() {
    return (
        <Background forPage="other">
            <Navbar/>
            <Container forPage="jkkform">
                <h2></h2>
                <h3></h3>
                <div className="text-input-stuff">

                </div>
            </Container>
        </Background>
    );
}

export default Jkkform;
