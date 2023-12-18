import React from "react";

interface EventRowProps {
	initialCount?: number;
}

const EventRow = ({ initialCount = 0 }: EventRowProps) => {
	const [count, setCount] = React.useState(initialCount);

	return (
		<div className="counter">
			<div>Count: {count}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default EventRow;
