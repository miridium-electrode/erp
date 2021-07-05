import { BasicProp } from '@lib/types';

/**
 * A universal background Component
 * @param props
 * a property for this element children
 * @returns JSX.Element
 */
function Background(props: BasicProp) {
    return (
        <div>
            {props.children}

            <style jsx>{`
                div {
                    width: 100vw;
                    height: 90vh;
                    display: grid;
                    place-items: center;
                }
            `}</style>
        </div>
    );
}

export default Background;