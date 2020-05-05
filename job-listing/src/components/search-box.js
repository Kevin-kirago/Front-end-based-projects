import React from "react";
import iconRemove from "../assets/icon-remove.svg";
import "../styles.scss";

const SearchBox = ({ filteredValues, removeFilterValue, clearFilterValue }) => {
	return (
		<div className="search">
			<div className="search__filter">
				{filteredValues.map((val) => (
					<div className="search__filter--item" key={filteredValues.indexOf(val)}>
						<span className="search__filter--item-text">{val}</span>
						<div className="icon-remove" onClick={() => removeFilterValue(val)}>
							<img src={iconRemove} alt="remove-icon" />
						</div>
					</div>
				))}
			</div>
			<div className="search__clearBtn">
				<button onClick={clearFilterValue}>Clear</button>
			</div>
		</div>
	);
};

export default SearchBox;
