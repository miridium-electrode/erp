import { BasicProp } from "@lib/types"

/**
 * container for /employees/attendance/hr/rules pages
 * @param props 
 * @returns 
 */
function JK(props: BasicProp) {
    return (
        <div>
            {props.children}
        
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}