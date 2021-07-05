import { BasicProp } from "@lib/types";

/**
 * /employees/attendance/hr/report container
 * @param props 
 * @returns 
 */
function Container(props: BasicProp) {
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
	);
}

export default Container;