import Background from '@components/background';
import Navbar from '@components/navbar/employees/attendance/hr';
import Container from '@components/container/employees/attendance/hr/company';
import styles from './ranking.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


/**
 * Ranking page of /employees/attendance/hr/rules
 * @returns 
 */
function Ranking(){
	return (
		<Background>
			<Navbar/>
			<Container>
				<div className={styles.fields}>
					<input type="text" />
					<button>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
			</Container>
		</Background>
	);
}


export default Ranking;