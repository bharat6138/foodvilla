import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./component/Body";
import { Carousel } from "./component/Carousel";
import { Header } from "./component/Header";

const AppLayout = () => {
	return (
		<div className="container">
			<Header />
			<Carousel />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<AppLayout />);
