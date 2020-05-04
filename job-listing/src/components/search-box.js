import React from "react";
import "../app/App.scss";

const SearchBox = () => {
	return (
		<div className="search">
			<div className="search__filters"></div>
			<div className="search__clearBtn">
				<button>Clear</button>
			</div>
		</div>
	);
};

export default SearchBox;
