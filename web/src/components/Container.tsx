import React from 'react';

type Props = {
    forPage: string;
    children: React.ReactNode;
};

function Container(props: Props) {
    if(props.forPage === "absen") {
        return (
            <div className="container bg-indigo-500 m-auto w-9/10 h-4/5">
                {props.children}
            </div>
        );
    } else {
        return null;
    }
}

export default Container;
