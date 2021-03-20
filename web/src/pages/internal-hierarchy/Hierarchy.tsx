import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

function Hierarchy() {
    return (
        <Background forPage="other">
            <Navbar forPage="e"/>
            <Container forPage="internalhierarchy">
                <div className="field">
                    <label></label>
                    <input type="text" />
                </div>
            </Container>
        </Background>
    );
}

export default Hierarchy;
