import React from "react";
import { IMG_SLIDER_URL } from "./config";
import { carouselOptions } from "./config";
export const Carousel = () => {
	return (
		<div>
			<div className="black-container ">
				<div className="carousel-container ">
					<div className="carousel-position ">
						<div className="carousel-row">
							<div className="display-cards">
								{carouselOptions.map((item) => (
									<div key={item.data.bannerId}>
										<a href="/collections/47668?type=rcv2">
											<img src={IMG_SLIDER_URL + item.data.creativeId} />
										</a>
									</div>
								))}
							</div>
						</div>
						<button className="_1Wnte _12MuM">
							<i className="icon-back _2ByCT" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
