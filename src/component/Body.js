import React, { useState } from "react";
import Resturant from "./Resturant";
import { Restaurant_Data } from "./config";

function filterData(searchInput, resturantsList) {
	let searchData = resturantsList.filter((item) =>
		item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()),
	);
	console.log(searchData);
	return searchData;
}

export default function Body() {
	const [resturantList, setResturantList] = useState(Restaurant_Data);

	console.log(resturantList.length);
	return (
		<div className="body-content">
			<div className="inner-body-content">
				<div className="all-resturant">
					<Search
						allRestuarant={resturantList}
						allsetRestuarant={setResturantList}
					/>
					<div className="resturants-margin">
						<div className="card-row ">
							{resturantList.map((restaurant) => {
								return <Resturant {...restaurant.data} key={restaurant.data.id} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Search({ allRestuarant, allsetRestuarant }) {
	return (
		<div className="search-container">
			<div className="inner-wrap ">
				<div className="box">
					<div className="coloumn">
						<div className="total-res">{allRestuarant.length} restaurants</div>
						<div className="search-box">
							<SearchBox
								allRestuarant={allRestuarant}
								allsetRestuarant={allsetRestuarant}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function SearchBox({ allRestuarant, allsetRestuarant }) {
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

			{isVisible === true ? (
				<>
					<button
						onClick={() => {
							let filtered = filterData(searchKeyword, allRestuarant);
							allsetRestuarant(filtered);
						}}
					>
						<span className="icon-magnifier" />
					</button>
					{searchKeyword !== "" ? (
						<button
							className="btn-close"
							onClick={() => {
								setSearchKeyword("");
								allsetRestuarant(Restaurant_Data);
							}}
						>
							<svg width="16" height="16" viewBox="0 0 24 24">
								<path
									d="M17.0251484,0.288798437 C17.5090218,-0.114571204 18.2292627,-0.0967643175 18.6927565,0.350826444 C19.189357,0.830387975 19.2031698,1.62172366 18.7236083,2.11832416 L18.7236083,2.11832416 L11.274,9.831 L18.7236083,17.5450054 C19.2031698,18.0416059 19.189357,18.8329416 18.6927565,19.3125031 C18.2292627,19.7600939 17.5090218,19.7779007 17.0251484,19.3745311 L16.9252588,19.2816513 L9.537,11.631 L2.14917595,19.2816513 L2.04928636,19.3745311 C1.56541292,19.7779007 0.845172034,19.7600939 0.381678232,19.3125031 C-0.114922271,18.8329416 -0.128735086,18.0416059 0.350826444,17.5450054 L0.350826444,17.5450054 L7.799,9.831 L0.350826444,2.11832416 C-0.128735086,1.62172366 -0.114922271,0.830387975 0.381678232,0.350826444 C0.845172034,-0.0967643175 1.56541292,-0.114571204 2.04928636,0.288798437 L2.14917595,0.381678232 L9.537,8.032 L16.9252588,0.381678232 Z"
									fill="#535766"
									fill-rule="nonzero"
									stroke="none"
									stroke-width="1"
								></path>
							</svg>
						</button>
					) : (
						""
					)}
				</>
			) : (
				<button
					onClick={() => {
						let filtered = filterData(searchKeyword, allRestuarant);
						allsetRestuarant(filtered);
					}}
				>
					<span className="icon-magnifier" />
				</button>
			)}
		</div>
	);
}
