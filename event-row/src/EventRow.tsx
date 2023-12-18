import React from "react";
import type { EventRow as EventRowType } from "microfrontend-contracts";

const EventRow: EventRowType = ({ initialCount = 0 }) => {
	const [count, setCount] = React.useState(initialCount);

	return (
		<div className="counter">
			<div>Count: {count}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default EventRow;
