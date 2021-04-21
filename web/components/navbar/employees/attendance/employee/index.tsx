import styles from "./styles.module.scss";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* the div come first so if floated left 
            it doesn't come after ul (div being block element) */}
            <div>
                <a href="/employees/profiles/info">username</a>
                <a href="/">Logout</a>
            </div>
            <ul>
                <li>
                    <a href="/employees/attendance/employee/attend">Attend</a>
                </li>
                <li>
                    <a href="/employees/attendance/employee/lists">Lists</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;