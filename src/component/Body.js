import React, { useState, useEffect } from "react";
import Resturant from "./Resturant";
import { Restaurant_Data } from "./config";
import Skeleton from "./Skeleton";
import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";
function filterData(searchInput, resturantsList) {
	let searchData = resturantsList.filter((item) =>
		item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()),
	);
	console.log(searchData);
	return searchData;
}

export default function Body() {
	const [allresturantList, setAllResturantList] = useState([]);
	const [filteredResturantsList, setFilteredResturantsList] = useState([]);
	useEffect(() => {
		getRestaurants();
	}, []);
	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.717111&lng=77.157598&page_type=DESKTOP_WEB_LISTING",
		);
		const json = await data.json();
		setAllResturantList(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredResturantsList(json?.data?.cards[2]?.data?.data?.cards);
	}

	// console.log(resturantList.length);
	return (
		<>
			<Carousel />
			<div className="body-content">
				<div className="inner-body-content">
					<div className="all-resturant">
						{allresturantList.length === 0 ? (
							<div className="skeleton">
								{Array(4)
									.fill("")
									.map((e, index) => (
										<Skeleton key={index} />
									))}
							</div>
						) : (
							<>
								<Search
									filteredResturantsList={filteredResturantsList}
									setFilteredResturantsList={setFilteredResturantsList}
									allresturantList={allresturantList}
									setAllResturantList={setAllResturantList}
								/>
								<div className="resturants-margin">
									<div className="card-row ">
										{filteredResturantsList.map((restaurant) => {
											return (
												<>
													{console.log(restaurant.data.id)}
													<Link
														to={"/restaurant/" + restaurant.data.id}
														className="card-item"
														key={restaurant.data.id}
													>
														<Resturant {...restaurant.data} />
													</Link>
												</>
											);
										})}
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

function Search({
	allresturantList,
	setAllResturantList,
	filteredResturantsList,
	setFilteredResturantsList,
}) {
	return (
		<div className="search-container">
			<div className="inner-wrap ">
				<div className="box">
					<div className="coloumn">
						<div className="total-res">
							{filteredResturantsList.length > 0
								? `${filteredResturantsList.length} resturants`
								: "no result found"}
						</div>
						<div className="search-box">
							<SearchBox
								filteredResturantsList={filteredResturantsList}
								setFilteredResturantsList={setFilteredResturantsList}
								allresturantList={allresturantList}
								setAllResturantList={setAllResturantList}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function SearchBox({
	allresturantList,
	setAllResturantList,
	filteredResturantsList,
	setFilteredResturantsList,
}) {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="search-box-input">
			<input
				type="text"
				placeholder="Search for restaurants and food"
				value={searchKeyword}
				onChange={(e) => setSearchKeyword(e.target.value)}
				onFocus={() => setIsVisible(true)}
			/>

			<button
				onClick={() => {
					let filtered = filterData(searchKeyword, allresturantList);
					setFilteredResturantsList(filtered);
				}}
			>
				<span className="icon-magnifier" />
			</button>
		</div>
	);
}
