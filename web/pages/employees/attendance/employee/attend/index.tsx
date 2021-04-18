import Background from "@components/background";
import Container from "@components/container";
import styles from "./styles.module.scss";
import Navbar from "@components/navbar/attend-employee";

function Attend() {
    return (
        <Background>
            <Navbar/>
            <Container>
                <div className={styles.part}>
                    <button>
                        Masuk
                    </button>
                    <button>
                        Keluar
                    </button>
                </div>
                <div className={`${styles.part} ${styles.inputs}`}>
                    <input type="text" placeholder="About"/>
                    <select>
                        <option value="sick">Sick</option>
                        <option value="permit">Permit</option>
                    </select>
                    <textarea placeholder="permit reason"></textarea>
                    <input type="file" name="attachment" placeholder="attachment"/>
                </div>
            </Container>
        </Background>
    );
}

export default Attend;