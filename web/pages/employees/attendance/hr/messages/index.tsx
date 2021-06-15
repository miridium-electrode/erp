import Background from '@components/background';
import Navbar from '@components/navbar/employees/attendance/hr';
import Container from '@components/container/employees/attendance/hr/messages';
import styles from './styles.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

function Messages(){
	return (
		<Background>
			<Navbar />
			<Container>
				<div className={styles.topmenu}>
					<input type="checkbox" id="all" />
					<FontAwesomeIcon icon={faRedo} className={styles.redo} />
				</div>

				<div className={styles.messagebar}>
					<input type="checkbox" />
					<span className={styles.mtitle}>pesan</span>
					<span className={styles.mdesc}>isi singkat .........................</span>
				</div>
			</Container>
		</Background>
	);
}


export default Messages;