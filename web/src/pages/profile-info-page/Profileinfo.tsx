import React from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import Usb1 from '../../components/user-settings-box-1/Usb1';
import './style.scss';

function Profileinfo() {
    return (
        <Background forPage="other">
            <Navbar forPage="e"/>
            <Container forPage="profileinfo">
                <Usb1/>
                <div className="box2">
                    <div className="field">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="alamat">
                            Alamat
                        </label>
                        <input type="text" name="alamat"/>
                    </div>
                    <div className="field">
                        <label htmlFor="status">
                            Status
                        </label>
                        <input type="text" name="status"/>
                    </div>
                    <div className="field">
                        <label htmlFor="jabatan">
                            Jabatan
                        </label>
                        <input type="text" name="jabatan"/>
                    </div>
                    <div className="field">
                        <label htmlFor="tgl">
                            Tanggal Lahir
                        </label>
                        <input type="text" name="tgl"/>
                    </div>
                    <button>Update</button>
                </div>
            </Container>
        </Background>
    );
}

export default Profileinfo;
