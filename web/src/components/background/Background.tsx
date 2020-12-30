import React from 'react';
import './style.scss';


type PropsOrigin = {
    forPage: string;
    children: React.ReactNode;
};


function Background(props: PropsOrigin) {
    if(props.forPage === "login") {
        return (
            <div className="backlogin">
                {props.children}
            </div>
        );
    } else {
        return (
            <div className="backother">
                {props.children}
            </div>
        );
    }
}

export default Background;
