import React from "react";
import jobsData from "../data/data.js";
import JobListItem from "./joblist-item";
import SearchBox from "./search-box";
import "../app/App.scss";

class JobListPreview extends React.Component {
	state = {
		searchField: [],
		data: [],
	};

	componentDidMount() {
		const { searchField } = this.state;
		if (searchField.length === 0) {
			this.setState({ data: jobsData });
		}
	}

	filteredItems = (itemsToFilter) => {
		return this.state.data.filter((item) => {
			for (const key in item) {
				if (Array.isArray(item[key])) {
					if (item[key].includes(itemsToFilter)) {
						return item;
					}
				} else {
					if (item[key] === itemsToFilter) {
						return item;
					}
				}
			}
		});
	};

	handleClick = (event) => {
		const filterValue = event.target.textContent;
		const { searchField } = this.state;
		if (!searchField.includes(filterValue)) {
			searchField.push(filterValue);
			this.setState({ data: this.filteredItems(filterValue) });
		}
	};

	removeFilterValue = (value) => {
		const { searchField } = this.state;
		searchField.filter((item) => item !== value);
	};

	clearFilterValue = () => {
		const { searchField } = this.state;
		searchField.splice(0, searchField.length);
	};

	render() {
		const { data, searchField } = this.state;
		return (
			<div className="joblist__preview">
				{searchField.length !== 0 ? <SearchBox /> : null}
				{data.map((item) => (
					<JobListItem key={item.id} item={item} handleClick={this.handleClick} />
				))}
			</div>
		);
	}
}

export default JobListPreview;
