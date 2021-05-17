import { BasicProp } from "@lib/types";

/**
 * Container for any page that is under
 * /employees/attendance/hr/company pages
 * @param props 
 * @returns 
 */
function Container(props: BasicProp) {
    return (
        <div>
            {props.children}

            <style jsx>{`
                div {
                    height: 85vh;
                    width: 85vw;
                    float: left;
                }
            `}</style>
        </div>
    );
}

export default Container;