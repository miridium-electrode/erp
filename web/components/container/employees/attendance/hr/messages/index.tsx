import { BasicProp } from "@lib/types";

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