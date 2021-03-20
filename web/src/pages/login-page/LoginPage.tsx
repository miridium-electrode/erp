import React from "react";
import Background from "../../components/background/Background";
import { useHistory } from 'react-router-dom';
import './style.scss';

function LoginPage() {
    let history = useHistory();
    async function getInputField() {
        try {
            let uname: string = document.getElementsByTagName('input')[0].value;
            let pwd: string = document.getElementsByTagName('input')[1].value;
            let response = await fetch("http://localhost:8000/login", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({"username": uname, "password": pwd})
            });

            if(!response.ok) {
                throw Error(response.statusText);
            } else {
                let result = await response.json();
                history.push('/absen');
                console.log(result);
            }
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <Background forPage="login">
            <div className="loginbox">
                <h1>Login</h1>
                <div className="field">
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="uname"/>
                </div>
                <div className="field">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd" className="bg-indigo-500" />
                </div>
                <button onClick={getInputField}>Login</button>
				{/*<a href="#">Forgot password?</a>
				   <a href="#">Not a user?</a>*/}
            </div>
        </Background>
    );
}

export default LoginPage;
