import React from 'react';
import './style.scss';

type Props = {
    forPage: string;
    children: React.ReactNode;
};

function Container(props: Props) {
    if(props.forPage === "absen") {
        return (
            <div className="container-absen">
                {props.children}
            </div>
        );
    } else if(props.forPage === "karyawantabel") {
        return (
            <div className="container-karyawan-tabel">
                {props.children}
            </div>
        );
    } else {
        return null;
    }
}

export default Container;
