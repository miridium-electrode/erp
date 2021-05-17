import { useState } from "react";

import Background from '@components/background'
import Navbar from '@components/navbar/employees/attendance/hr'
import Container from '@components/container/employees/attendance/hr/company'
import styles from './profile.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Company_Profile(){
    const [h, setH] = useState([0]);

    const handleAddClick = () => {
        setH([...h, ++h[h.length - 1]]);
    }

    return (
        <Background>
            <Navbar />
            <Container>
                <div className={styles.cname}>
                    <label htmlFor="name">Nama Perusahaan</label>
                    <input type="text" name="name" />
                </div>
                <p>Hierarchy</p>
                {h.map((elemkey) => {
                        if(h.length === 1) {
                            return (
                                <div className={styles.hierarchy} key={elemkey.toString()}>
                                    <input type="text" name="hie" />    
                                    <button onClick={handleAddClick}><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            );
                        } else {
                            return (
                                <div className={styles.hierarchy} key={elemkey.toString()}>
                                    <input type="text" name="hie" />    
                                    <button onClick={handleAddClick}><FontAwesomeIcon icon={faPlus} /></button>
                                    <button><FontAwesomeIcon icon={faMinus} /></button>
                                </div>
                            );
                        }
                    })
                }
                
            </Container>
        </Background>
    );
}


export default Company_Profile;