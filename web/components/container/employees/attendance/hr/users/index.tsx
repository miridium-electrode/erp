import { BasicProp } from "@lib/types";

/**
 * container for page /employees/attendance/hr/users
 * @param props 
 * @returns 
 */
function Container(props: BasicProp) {
	return (
		<div>
			{props.children}

			<style jsx>{`
				width: 85vw;
				height: 85vh;
				display: flex;
				flex-direction: column;
			`}</style>
		</div>
	);
}

export default Container;