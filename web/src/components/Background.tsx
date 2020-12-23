import React from 'react';

type Props = {
    children: React.ReactNode;
};

function Background({ children }: Props) {
    return(
        <div className="flex justify-center items-center h-screen bg-indigo-900">
            { children }
        </div>
    )
}
export default Background;
