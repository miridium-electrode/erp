import React from 'react';
import './style.scss';

function Navbar() {
    return (
        <div className="navwrapper">
            <nav>
                <div>
                    Item
                </div>
                <ul>
                    <li className="special-li">Absensi</li>
                    <li className="special-li">Users</li>
                    <li className="special-li">Laporan</li>
                    <li>Pesan</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
