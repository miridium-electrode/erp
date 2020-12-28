import React from 'react';


type PropsOrigin = {
    forPage: string;
    children: React.ReactNode;
};


function Background(props: PropsOrigin) {
    if(props.forPage === "login") {
        return (
            <div className="flex justify-center items-center h-screen bg-indigo-900">
                {props.children}
            </div>
        );
    } else {
        return (
            <div className="flex flex-col justify-between h-screen bg-indigo-900">
                {props.children}
            </div>
        );
    }
}

export default Background;
