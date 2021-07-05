import { BasicProp } from '@lib/types';

/**
 * container for employees attendance report, 
 * the name of the page is lists  
 * @param props 
 * take a Component as a children
 * @returns JSX.Element 
 */
function Container(props: BasicProp) {
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