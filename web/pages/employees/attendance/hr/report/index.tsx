import Background from '@components/background';
import Navbar from '@components/navbar/employees/attendance/hr';
import Container from '@components/container/employees/attendance/hr/report';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faDownload } from "@fortawesome/free-solid-svg-icons";

/**
 * employees/attendance/hr/report page
 * @returns 
 */
function Report(){
	return(
		<Background>
			<Navbar />
			<Container>
				<div className={styles.topmenu}>
					<div className={styles.tmleft}>
						<span>bulan</span>
						<button>
							bulan ini
						</button>
						<button>
							<FontAwesomeIcon icon={faCaretLeft} />
						</button>
						<button>
							<FontAwesomeIcon icon={faCaretRight} />
						</button>
					</div>
					<div className={styles.tmright}>
						<button>
							Download
							<FontAwesomeIcon icon={faDownload} />
						</button>
					</div>
				</div>

				<table>
					<tr>
						<th>Nama</th>
						<th>Masuk</th>
						<th>Keluar</th>
						<th>Keterangan</th>
					</tr>
				</table>
			</Container>
		</Background>
	);
}


export default Report;