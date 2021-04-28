import Background from "@components/background";
import Container from "@components/container/profiles";
import Navbar from "@components/navbar/employees/attendance/employee";

function Left() {
    return (
        <>
            <img src="" alt="Profile Picture"/>
            <a href="/employees/profiles/info">Profile Info</a>
            <a href="/employees/profiles/settings">User Settings</a>
        </>
    );
}

function Right() {
    return (
        <>
            <div className="field">
                <label htmlFor="uname">
                    Username
                </label>
                <input type="text" />
            </div>
            <div className="field">
                <label htmlFor="pwd">
                    Password
                </label>
                <input type="password" name="pwd" />
            </div>
            <div className="field">
                <label htmlFor="rpwd">
                    Retype Password
                </label>
                <input type="password" name="rpwd" />
            </div>
            <div className="buttons">
                <button>Delete Account</button>
                <button>Update</button>
            </div>
        </>
    );
}

function Settings() {
    return (
        <Background>
            <Navbar/>
            <Container left={<Left />} right={<Right />}/>
        </Background>
    )
}

export default Settings;