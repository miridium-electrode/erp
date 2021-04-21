import { BasicProp } from '@lib/types';

interface ContainerProp extends BasicProp {
    forPage?: string;
}

function Container(props: ContainerProp) {
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

export default Container;