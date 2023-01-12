import React from "react";
import { IMG_CDN_URL } from "./config";
const Resturant = ({
	name,
	cloudinaryImageId,
	cuisines,
	lastMileTravelString,
	avgRating,
	slaString,
	costForTwoString,
}) => {
	return (
		<div className="card-position">
			<a
				href="/restaurants/aggarwal-sweets-india-opposite-batra-cinema-mukherjee-nagar-delhi-52070"
				className="card-item"
			>
				<div className="inner-card">
					<div className="card-width">
						<div className="resturant-img">
							<img alt="Aggarwal Sweets India" src={IMG_CDN_URL + cloudinaryImageId} />
						</div>
						<div className="res-detail">
							<div className="res-name">{name}</div>
							<div className="res-cusines">{cuisines.join(", ")}</div>
						</div>
						<div className="res-others">
							<div
								className={
									avgRating <= 3.9 ? "rating average-rate" : "rating good-rate "
								}
							>
								<span className="icon-star" />
								<span>{avgRating}</span>
							</div>
							<div>•</div>
							<div>{slaString}</div>
							<div>•</div>
							<div className="for-ppl">{costForTwoString}</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Resturant;
