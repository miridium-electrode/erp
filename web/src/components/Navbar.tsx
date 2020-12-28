import React from 'react';

function Navbar() {
    return (
        <div className="bg-purple-300 p-4 w-full">
            <nav className="flex justify-between">
                <div>
                    Item
                </div>
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
