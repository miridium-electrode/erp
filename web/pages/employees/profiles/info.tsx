import Background from "@components/background";
import Container from "@components/container/profiles";
import Navbar from "@components/navbar/employees/attendance/employee";

/**
 * the left side of "employees/profiles/info" page
 * @returns
 */
function Left() {
    return (
        <>
            <img src="" alt="Profile Picture"/>
            <a href="/employees/profiles/info">Profile Info</a>
            <a href="/employees/profiles/settings">User Settings</a>
        </>
    );
}

/**
 * The right side of "employees/profiles/info" page
 * @returns 
 */
function Right() {
    return (
        <>
            <div className="field">
                <label htmlFor="nama">nama</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label htmlFor="alamat">alamat</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label htmlFor="status">status</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label htmlFor="jabatan">jabatan</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label htmlFor="tgl">Tanggal Lahir</label>
                <input type="text" name="tgl"/>
            </div>
        </>
    );
}

/**
 * The page of "employees/profiles/info"
 * @returns 
 */
function Info() {
    return (
        <Background>
            <Navbar />
            <Container left={<Left />} right={<Right />} />
        </Background>
    );
}

export default Info;