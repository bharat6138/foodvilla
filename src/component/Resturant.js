import React from "react";
import { IMG_CDN_URL } from "./config";
import { Restaurant_Data } from "./config";

const Resturant = ({
	name,
	cloudinaryImageId,
	cuisines,
	lastMileTravelString,
	avgRating,
	slaString,
	costForTwoString,
	ribbon,
	aggregatedDiscountInfo,
}) => {
	// const { header } = aggregatedDiscountInfo;
	return (
		<div className="inner-card">
			<div className="card-width">
				<div className="resturant-img">
					<img alt="Aggarwal Sweets India" src={IMG_CDN_URL + cloudinaryImageId} />
				</div>
				{ribbon ? (
					<div
						className="promote"
						style={{
							background: "rgb(58, 60, 65)",
							color: "rgb(255, 255, 255)",
							borderColor: "rgb(30, 32, 35) transparent",
						}}
					>
						<div className="text">{ribbon[0].type}</div>
					</div>
				) : (
					""
				)}

				<div className="res-detail">
					<div className="res-name">{name}</div>
					<div className="res-cusines">{cuisines.join(", ")}</div>
				</div>
				<div className="res-others">
					<div
						className={
							avgRating <= 3.9 && !isNaN(avgRating)
								? "rating average-rate"
								: "rating good-rate "
						}
					>
						<span className="icon-star" />
						<span>{avgRating}</span>
					</div>
					<div>•</div>
					<div>{slaString}</div>
					<div>•</div>
					<div className="for-ppl">{costForTwoString}</div>
					{/* <p>{aggregatedDiscountInfo?.shortDescriptionList[0].meta}</p>
							{console.log(aggregatedDiscountInfo?.shortDescriptionList[0].meta)} */}
				</div>
				{aggregatedDiscountInfo ? (
					<div className="offers">
						<span className="icon-offer-filled icon"></span>
						<span className="text">
							{aggregatedDiscountInfo?.shortDescriptionList[0].meta}
						</span>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Resturant;
