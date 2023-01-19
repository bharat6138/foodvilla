import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => {
	return (
		<>
			<div className="logo">
				<Link to="/">
					<img src="https://img.icons8.com/color/48/null/just-eat.png" />
				</Link>
			</div>
		</>
	);
};
export const LocateMe = () => {
	return (
		<div className="locate-me">
			<span className="_1tcx6 _34oCb">
				<span className="_3odgy">Shalimar Bag</span>
			</span>
			<span className="_3HusE">Mukherjee Nagar, Delhi, India</span>
			<span className="icon-downArrow kVKTT" />
			<div className="_21VC0 sPr5A" />
		</div>
	);
};

export const RightMenu = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<ul className="right-nav">
			{isLoggedIn ? (
				<li className="nav-item">
					<button onClick={() => setIsLoggedIn(false)} style={{ color: "#fc8019" }}>
						Login
					</button>
				</li>
			) : (
				<li className="nav-item">
					<button onClick={() => setIsLoggedIn(true)} style={{ color: "#fc8019" }}>
						Logout
					</button>
				</li>
			)}
			<li className="nav-item">
				<Link to="/about">About</Link>
			</li>
			<li className="nav-item">
				<div className="nav-item-wrapper ">
					<a className="nav-link" href="/checkout">
						<span className="nav-icon">
							<svg
								className="svg-cart"
								viewBox="-1 0 37 32"
								height={20}
								width={20}
								fill="#686b78"
							>
								<path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z" />
							</svg>
							<span className="cart">0</span>
						</span>
						<span>Cart</span>
					</a>
				</div>
			</li>
			<li className="nav-item">
				<div className="nav-item-wrapper ">
					<a className="nav-link" href="/checkout">
						<span className="nav-icon">
							<svg
								className="svg-help"
								viewBox="6 -1 12 25"
								height={19}
								width={19}
								fill="#686b78"
							>
								<path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z" />
							</svg>
						</span>
						<span>Help</span>
					</a>
				</div>
			</li>
		</ul>
	);
};
export const Header = () => {
	return (
		<div className="header-nav">
			<div className="inner-header-nav">
				<Title />
				<LocateMe />
				<RightMenu />
			</div>
		</div>
	);
};
