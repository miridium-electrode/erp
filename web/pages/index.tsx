import styles from "@styles/landing-page.module.scss";

function LandingPage() {
    return (
        <div className={styles["landing-bg"]}>
            <header>
                <a href="#" className={styles["logo"]}>A+ERP</a>
                <div className={styles["pseudo-buttons"]}>
                    <a href="/login">Sign In</a>
                    <a href="/signup" className={styles["sign-up"]}>Try It</a>
                </div>
                <ul>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default LandingPage;