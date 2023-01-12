import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Body from "./component/Body";
import { Header } from "./component/Header";

const AppLayout = () => {
	return (
		<div className="container">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<AppLayout />);
