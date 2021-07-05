import Background from '@components/background'
import Navbar from '@components/navbar/employees/attendance/hr'
import Container from '@components/container/employees/attendance/hr/users'
import styles from './styles.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faDownload } from "@fortawesome/free-solid-svg-icons";

function Users(){
	return (
		<Background>
			<Navbar />
			<Container>
				<div className={styles.topmenu}>
					<div className={styles.tmleft}>
						<span>Text</span>
						<button>Bulan Ini</button>
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

				<div className={styles.filters}>
					<select name="departemen">
						<option selected disabled>Semua Departemen</option>
						<option value="it">Teknologi</option>
					</select>
					<select name="kantor">
						<option selected disabled>Kantor Pusat</option>
						<option value="it">Teknologi</option>
					</select>
					<select name="jabatan">
						<option selected disabled>Semua Jabatan</option>
						<option value="it">Teknologi</option>
					</select>
				</div>

				<table>
					<tr>
						<th>Nama</th>
						<th>Departemen</th>
						<th>Jabatan</th>
						<th></th>
					</tr>
				</table>
			</Container>
		</Background>
	);
}


export default Users;