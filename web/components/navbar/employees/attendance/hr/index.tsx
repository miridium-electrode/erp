import styles from "./style.module.scss";

/**
 * A Navbar function for hr attendace page
 * @returns JSX.Element
 */
function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div>
                <a href="/employees/profiles/info">username</a>
                <a href="/">Logout</a>
            </div>
            <ul>
                <li>
                    <a href="/employees/attendance/hr/attend">Absensi</a>
                </li>
                <li>
                    <a href="/employees/attendance/hr/rules">Rules</a>
                </li>
                <li>Company</li>
                <li>Users</li>
                <li>Laporan</li>
                <li>Pesan</li>
            </ul>
        </nav>
    );
}

export default Navbar; 