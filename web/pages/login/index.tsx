import Background from '@components/background';
import Container from '@components/container';
import styles from './styles.module.scss';

function Login() {
    return (
        <Background>
            <Container forPage="sign-star">
                <div className={styles.field}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div className={styles.fiels}>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd"/>
                </div>
                <a href="#">Forgot Password?</a>
                <a href="#">Not A User?</a>
                <a href="#" className={styles.login_btn}>Login</a>
            </Container>
        </Background>
    );
}

export default Login;