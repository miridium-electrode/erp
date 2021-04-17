import Background from "@components/background";
import Container from "@components/container";
import styles from "./styles.module.scss";

function SignUp() {
    return (
        <Background>
            <Container forPage="sign-star">
                <h2>Sign Up</h2>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd"/>
                </div>
                <a href="#" className={styles.login_btn}>Sign Up</a>
            </Container>
        </Background>
    );
}

export default SignUp;