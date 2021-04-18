import styles from "./styles.module.scss";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* the div come first so if floated left 
            it doesn't come after ul (div being block element) */}
            <div>
                <a href="#">username</a>
            </div>
            <ul>
                <li>
                    <a href="#">Attend</a>
                </li>
                <li>
                    <a href="#">List</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;