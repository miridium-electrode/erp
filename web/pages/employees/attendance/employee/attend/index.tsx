import Background from "@components/background";
import Container from "@components/container/employees/attendance/employee/attend";
import styles from "./styles.module.scss";
import Navbar from "@components/navbar/employees/attendance/employee";

// TODO: merge this with "pages/employees/attendance/employee/attend"

/**
 * The "employees/attendance/employee/attend" page
 * @returns JSX.Element
 */
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