import { BasicProp } from '@lib/types';

interface ContainerProp extends BasicProp {
    forPage?: string;
}

// TODO: turn this as universal all employees attend page

/**
 * Container for employee attend page
 * @param props 
 * an object that take string and a Component
 * @returns JSX.Element
 */
function Container(props: ContainerProp) {
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