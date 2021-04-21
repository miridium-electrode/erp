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
                    width: 85vw;
                    height: 85vh;
                }
            `}</style>
        </div>
    );
}

export default Container;