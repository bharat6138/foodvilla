import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Skeleton from "./Skeleton";

const ResturantMenu = () => {
	const { id } = useParams();
	console.log(id);
	const [resturantList, setResturantList] = useState(null);

	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/v4/full?lat=28.717111&lng=77.157598&menuId=" +
				id,
		);
		const json = await data.json();
		setResturantList(json?.data);
	}
	useEffect(() => {
		getRestaurants();
	}, []);
	return !resturantList ? (
		<Skeleton />
	) : (
		<>
			<div className="resBody">
				<div className="resMenu">
					<div className="resHeader">
						<div className="inner">
							<div className="imageDetails">
								<div className="imgCont">
									<img
										className="imgFull"
										width={254}
										height={165}
										alt="img"
										src={IMG_CDN_URL + resturantList?.cloudinaryImageId}
									/>
								</div>
							</div>
							<div className="textDetail">
								<div className="textCont">
									<div className="title">
										<h1 title="Modern Caterers" className="txt">
											{resturantList.name}
										</h1>
									</div>
									<div>
										<div className="cusines">{resturantList?.cuisines?.join(", ")}</div>
										<div className="cusines">
											{resturantList.locality}, {resturantList.city}
										</div>
										<br />
										<div className="_2aZit _2fC4N">
											<div className="_2iUp9 ">
												<div className="_2l3H5">
													<span>
														<span className="icon-star _2n5YQ" />
														{resturantList.avgRating}
													</span>
												</div>
												<div className="_1De48">
													<span className="_1iYuU">{resturantList.totalRatingsString}</span>
												</div>
											</div>
											<div className="_2iUp9 ">
												<div className="_2l3H5">
													<span className="_27qo_">{resturantList?.sla?.slaString}</span>
												</div>
												<div className="_1De48">Delivery Time</div>
											</div>
											<div className="_2iUp9 ">
												<div className="_2l3H5">
													<span>₹ {resturantList.costForTwo / 100}</span>
												</div>
												<div className="_1De48">Cost for two</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="offer">
								<div className="_2FyFZ icJ_O">
									<div className="QWCzK">Offer</div>
									<div className="_3F2Nk">
										<div className="DM5zR">
											<span className="icon-offer-filled _26GkL" />
											<div className="_3lvLZ" style={{ WebkitBoxOrient: "vertical" }}>
												{resturantList?.aggregatedDiscountInfo?.descriptionList[0].meta}
											</div>
										</div>
										<div className="DM5zR">
											<span className="icon-offer-filled _26GkL" />
											<div className="_3lvLZ" style={{ WebkitBoxOrient: "vertical" }}>
												{resturantList?.aggregatedDiscountInfo?.descriptionList[1].meta}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="body-content">
					<div className="inner-body-content">
						<div className="all-resturant">
							{/* CArds  */}

							<div className="cardsItem">
								{Object.values(resturantList?.menu?.items).map((item) => (
									<>
										<div className="menuCards" key={item?.id}>
											<div className="menuTxt">
												<div aria-hidden="true">
													<i
														className={
															`foodtype nonVeg icon-` + item.attributes.vegClassifier
														}
														role="presentation"
														style={{ lineHeight: "1.2" }}
														aria-hidden="true"
													/>
													{item?.isBestSeller === true ? (
														<span class="bestSeller">
															<span class=" icon-star"></span> Bestseller
														</span>
													) : (
														""
													)}
												</div>
												<h3 className="title">{item?.name}</h3>
												<div className="priceOffer" aria-hidden="true">
													<span className="price" aria-hidden="true">
														<span className="rupee">{item?.price / 100}</span>
													</span>
													<span className="offer">
														{item?.offerTags?.map((item, i) => (
															<>
																<span className="styles_tagTitle__1FFuq">{item.title}</span>

																<span> | {item.subTitle}</span>
															</>
														))}
													</span>
												</div>
												<div className="serving" aria-hidden="true">
													{item.category} | {item.description}
												</div>
											</div>
											<div className="menuImg">
												<div aria-hidden="true">
													<button
														className="btnImg"
														aria-label="See more information about Butter Paneer Grilled Double Patty Burger"
													>
														<img
															alt="Butter Paneer Grilled Double Patty Burger"
															className="styles_itemImage__3CsDL"
															loading="lazy"
															width={256}
															src={
																!item?.cloudinaryImageId
																	? "https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/3cb974c28eb00627cc0671685c79ffd9.jpg"
																	: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
																	  item.cloudinaryImageId
															}
														/>
													</button>
												</div>
											</div>
										</div>
									</>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResturantMenu;
