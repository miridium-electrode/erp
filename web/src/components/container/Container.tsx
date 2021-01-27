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
    } else if(props.forPage === "profileinfo") {
        return (
            <div className="container-profile-info">
                {props.children}
            </div>
        );
    }  else if(props.forPage === "usersettings") {
        return (
            <div className="container-user-settings">
                {props.children}
            </div>
        );
    } else if(props.forPage === "jadwalkerja") {
        return (
            <div className="container-jadwal-kerja">
                {props.children}
            </div>
        );
    } else if(props.forPage === "jadwalkerjaform") {
        return (
            <div className="container-jadwal-kerja-form">
                {props.children}
            </div>
        );
    } else if(props.forPage === "companyprofile") {
        return (
            <div className="container-company-profile">
                {props.children}
            </div>
        );
    } else if(props.forPage === "jkk") {
        return (
            <div className="container-jkk">
                {props.children}
            </div>
        );
    } else if(props.forPage === "jkkform") {
        return (
            <div className="container-jkk-form">
                {props.children}
            </div>
        );
    } else if(props.forPage === "internalhierarchy") {
        return (
            <div className="container-hierarchy">
                {props.children}
            </div>
        );
    } else if(props.forPage === "userslist") {
        return (
            <div className="container-users-list">
                {props.children}
            </div>
        );
    } else if(props.forPage === "laporan") {
        return (
            <div className="container-laporan">
                {props.children}
            </div>
        );
    } else if(props.forPage === "pesan") {
        return (
            <div className="container-pesan">
                {props.children}
            </div>
        );
    } else if(props.forPage === "show") {
        return (
            <div className="container-show">
                {props.children}
            </div>
        );
    } else {
        return null;
    }
}

export default Container;
