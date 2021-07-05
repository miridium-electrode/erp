import { BasicProp } from '@lib/types';

interface ContainerProp extends BasicProp {
    forPage?: string;
}

/**
 * Container Components for Sign-Up and Sign-in page
 * @param props 
 * take an option strings and Component
 * @returns JSX.Elements
 */
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