import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import Usb1 from '../../components/user-settings-box-1/Usb1';
import './style.scss';

function Usersettings() {
    return (
        <Background forPage="other">
            <Navbar forPage="karyawan"/>
            <Container forPage="usersettings">
                <Usb1/>
                <div className="box2diff">
                    <div className="field">
                        <label htmlFor="uname">Username</label>
                        <input name="uname" type="input"/>
                    </div>
                    <div className="field">
                        <label htmlFor="pwd">Password</label>
                        <input name="pwd" type="input"/>
                    </div>
                    <div className="field">
                        <label htmlFor="repwd">Retype Password</label>
                        <input type="text" name="repwd"/>
                    </div>
                    <div className="twobtn">
                        <button>Delete account</button>
                        <button>Update</button>
                    </div>
                </div>
            </Container>
        </Background>
    );
}

export default Usersettings;
