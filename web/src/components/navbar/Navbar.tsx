import React from 'react';
import './style.scss';

function Navbar() {
    return (
        <div className="navwrapper">
            <nav>
                <ul>
                    <li>Absensi</li>
                    <li>Users</li>
                    <li>Laporan</li>
                    <li>Pesan</li>
                    <li className="special-li">username</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
