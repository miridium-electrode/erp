import React from 'react';

function Navbar() {
    return (
        <div className="container mx-auto bg-purple-300 p5">
            <nav className="flex justify-between">
                <ul className="flex flex-row">
                    <li className="pr-5">Absensi</li>
                    <li className="pr-5">Users</li>
                    <li className="pr-5">Laporan</li>
                    <li>Pesan</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
