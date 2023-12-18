import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import EventRow from "./EventRow";

const App = () => (
	<div className="container">
		<EventRow />
	</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
