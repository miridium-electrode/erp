import { BasicProp } from '@lib/types';

interface ContainerProp extends BasicProp {
    forPage?: string;
}

function Container(props: ContainerProp) {
    if(props.forPage === "sign-star") {
        return (
            <div>
                {props.children}

                <style jsx>{`
                    div {
                        width: 25vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                `}</style>
            </div>
        );
    }
    return (
        <div>
            {props.children}
            
            <style jsx>{`
                div {
                    width: 85vw;
                    height: 85vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                }
            `}</style>
        </div>
    );
}

export default Container;