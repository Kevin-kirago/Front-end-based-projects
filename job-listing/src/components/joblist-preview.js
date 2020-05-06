import React from "react";
import jobsData from "../data/data.js";
import JobListItem from "./joblist-item";
import SearchBox from "./search-box";
import "../styles.scss";

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

	filteredItems = (itemsToFilter, arr) => {
		let arrList = [];

		if (!arr) {
			arrList = this.state.data;
		} else {
			arrList = arr;
		}

		const filteredItems = arrList.filter((item) => {
			let newItems;
			for (const key in item) {
				if (Array.isArray(item[key])) {
					if (item[key].includes(itemsToFilter)) {
						newItems = item;
					}
				} else {
					if (item[key] === itemsToFilter) {
						newItems = item;
					}
				}
			}
			return newItems;
		});

		return filteredItems;
	};

	handleClick = (event) => {
		const filterValue = event.target.textContent;
		const { searchField } = this.state;
		if (!searchField.includes(filterValue)) {
			searchField.push(filterValue);
			this.setState({ data: this.filteredItems(filterValue) });
		}
	};

	findFiltereData = (filteredValue) => {
		if (filteredValue.length === 0) {
			return jobsData;
		} else {
			let previousData,
				filteredData = [];
			for (const item of filteredValue) {
				if (filteredValue.length === 1) {
					filteredData = this.filteredItems(item, jobsData);
					return filteredData;
				} else {
					while (filteredValue.indexOf(item) === 0) {
						previousData = this.filteredItems(item, jobsData);
						break;
					}
					filteredData = this.filteredItems(item, previousData);
				}
			}

			return filteredData;
		}
	};

	removeFilterValue = async (val) => {
		const filteredValue = this.state.searchField.filter((valItem) => valItem !== val);
		this.setState({
			searchField: filteredValue,
			data: this.findFiltereData(filteredValue),
		});
	};

	clearFilterValue = () => {
		const { searchField } = this.state;
		if (searchField.length > 0) {
			searchField.splice(0, searchField.length);
			this.setState({ searchField, data: jobsData });
		}
	};

	render() {
		const { data, searchField } = this.state;
		return (
			<div className="joblist__preview">
				{searchField.length > 0 ? (
					<SearchBox filteredValues={searchField} removeFilterValue={this.removeFilterValue} clearFilterValue={this.clearFilterValue} />
				) : null}
				{data.map((item) => (
					<JobListItem key={item.id} item={item} handleClick={this.handleClick} />
				))}
			</div>
		);
	}
}

export default JobListPreview;
