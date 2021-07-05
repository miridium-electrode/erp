import { BasicProp } from "@lib/types";

/**
 * container for slug page at /employees/attendance/hr/rules/[name]
 * @param props 
 * @returns 
 */
function Container_name(props: BasicProp) {
    return (
        <div>
            {props.children}

            <style jsx>{`
                div {
                    width: 85vw;
                    height: 85vh;
                    display: flex;
                    flex-direction: column;
                }            
            `}</style>
        </div>
    )
}

export default Container_name;