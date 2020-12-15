import React from "react";

function LoginPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-row justify-center items-center">
                <h1 className="text-white">Login</h1>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="uname"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd"/>
                </div>
                <button>Login</button>
                <a href="#">Forgot password?</a>
                <a href="#">Not a user?</a>
            </div>
        </div>
    );
}

export default LoginPage;