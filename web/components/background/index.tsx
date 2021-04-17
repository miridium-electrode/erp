import { BasicProp } from '@lib/types';

function Background(props: BasicProp) {
    return (
        <div>
            {props.children}

            <style jsx>{`
                div {
                    width: 100vw;
                    height: 100vh;
                    display: grid;
                    place-items: center;
                }
            `}</style>
        </div>
    );
}

export default Background;