import Background from "@components/background";
import Container from "@components/container/employees/attendance/employee/lists";
import Navbar from "@components/navbar/employees/attendance/employee";

import styles from "./styles.module.scss";

function Lists() {
    return (
        <Background>
            <Navbar />
            <Container>
                <table className={styles.table}>
                    <tr>
                        <th>Hari</th>
                        <th>Masuk</th>
                        <th>Keluar</th>
                        <th>keterangan</th>
                    </tr>
                </table>
            </Container>
        </Background>
    );
}

export default Lists; 