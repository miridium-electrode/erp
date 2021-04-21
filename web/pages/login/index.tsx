import Background from '@components/background';
import Container from '@components/container/sign-star';
import styles from './styles.module.scss';

function Login() {
    return (
        <Background>
            <Container forPage="sign-star">
                <h2>Login</h2>
                <div className={styles.field}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd"/>
                </div>
                <a href="#" className={styles.useful_links}>Forgot Password?</a>
                <a href="#" className={styles.useful_links}>Not A User?</a>
                <a href="#" className={styles.login_btn}>Login</a>
            </Container>
        </Background>
    );
}

export default Login;