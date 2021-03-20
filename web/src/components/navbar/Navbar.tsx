import React from 'react';
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import AbsenPage from '../../pages/absen-page/AbsenPage';
import Detailabsen from '../../pages/detail-absen-page/Detailabsen';
import Laporan from '../../pages/laporan-page/Laporan';
import Pesan from '../../pages/pesan-page/Pesan';
import Usersettings from '../../pages/user-settings-page/Usersettings';
import './style.scss';

type Props = {
	forPage: string
};

function Navbar(props: Props) {
	return(
		<>
			<nav>
				<ul>

					<li>
						<Link to="/detail">Detail</Link>
					</li>
					<li>
						<Link to="/laporan">Laporan</Link>
					</li>
					<li>
						<Link to="/pesan">Pesan</Link>
					</li>
					<li>
						<Link to="/user">User</Link>
					</li>
				</ul>
			</nav>

			<Switch>

				<Route path="/detail">
					<Detailabsen/>
				</Route>
				<Route path="/laporan">
					<Laporan/>
				</Route>
				<Route path="/pesan">
					<Pesan/>
				</Route>
				<Route path="/user">
					<Usersettings/>
				</Route>
			</Switch>
		</>
	);
}

export default Navbar;
