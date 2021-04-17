import { BasicProp } from '@lib/types';

function Container(props: BasicProp) {
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