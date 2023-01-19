import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./component/Body";
// import { Carousel } from "./component/Carousel";
import { Header } from "./component/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import ResturantMenu from "./component/ResturantMenu";

const AppLayout = () => {
	return (
		<div className="container">
			<Header />

			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "/restaurant/:id",
				element: <ResturantMenu />,
			},
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<RouterProvider router={router} />);
