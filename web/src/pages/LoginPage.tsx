import React from "react";

async function getInputField() {
    try {
        let uname: string = document.getElementsByTagName('input')[0].value;
        let pwd: string = document.getElementsByTagName('input')[1].value;
        let response = await fetch("http://localhost:8000/login", {
            method: "post",
            body: JSON.stringify({"username": uname, "password": pwd})
        });

        let result = await response.json();
        console.log(result);
    }
    catch(e) {
        console.error("invalid username or password");
        console.log(e);
    }
}

function LoginPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-indigo-900">
            <div className="flex flex-col justify-center items-center bg-indigo-700 p-8">
                <h1 className="text-white text-3xl m-4">Login</h1>
                <div className="flex flex-col justify-center items-center mb-4">
                    <label htmlFor="uname" className="text-white">Username</label>
                    <input type="text" name="uname" className="bg-indigo-500" />
                </div>
                <div className="flex flex-col justify-center items-center mb-4">
                    <label htmlFor="pwd" className="text-white">Password</label>
                    <input type="password" name="pwd" className="bg-indigo-500" />
                </div>
                <button className="text-white bg-green-400 py-2 px-20 mb-2" onClick={getInputField}>Login</button>
                <a href="#" className="text-white mb-2">Forgot password?</a>
                <a href="#" className="text-white mb-2">Not a user?</a>
            </div>
        </div>
    );
}

export default LoginPage;
