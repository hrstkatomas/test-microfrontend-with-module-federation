import React from "react";
import ReactDOM from "react-dom";

import EventRow from "event_row/EventRow";

import "./index.css";

const App = () => (
	<div className="container">
		<div>Name: host</div>
		<div>Framework: react</div>
		<div>Language: TypeScript</div>
		<div>CSS: Empty CSS</div>
		<EventRow initialCount={10} />
	</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
