import React from "react";

const About = () => {
	return (
		<div className="container">
			<div className="row">
				<div className=" about-content animated fadeIn scrollable">
					<h1 className="animated fadeIn one">about us</h1>
					<div
						className="about-me"
						style={{ transform: "translateY(0px) translateZ(0px)", marginTop: 20 }}
					>
						<div
							className="Synopsis-highlightLine five"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						/>
						<div className="animated fadeIn three">
							<p className="Synopsis-highlight">
								Our mission is to elevate the quality of life for the urban consumer
								with unparalleled convenience. Convenience is what makes us tick. It's
								what makes us get out of bed and say, "Let's do this."
							</p>
						</div>
						<div
							className="Synopsis-highlightLine five"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						/>
						<div className="animated fadeIn four">
							<p />
							<p />
							<p>.</p>
							<p />
						</div>
					</div>
				</div>
				<div className="about-panel-wrapper">
					<div className=" about-panel animated fadeIn">
						<div className="perspective-container">
							<div
								className="zero photo-about animated fadeIn"
								style={{ transform: "translateY(0px) translateZ(0px)" }}
							>
								<div className="hide-photo-filter animated fadeIn" />
								<div className="about-info">
									<h3 className="about-info-name animated fadeInUp up-one">
										FOOD VILLA
									</h3>
									<div className="about-info-contact">
										<h4 className="animated fadeInUp up-two">
											{" "}
											We Work Hard And Party Harder!
										</h4>
										<p className="animated fadeInUp up-three">Gurugram, New Delhi</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
