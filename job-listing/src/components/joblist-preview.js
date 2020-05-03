import React from "react";
import data from "../data/data.js";
import JobListItem from "./joblist-item";

import "../app/App.scss";

class JobListPreview extends React.Component {
	state = {
		searchField: [],
		filteredData: {
			html: [],
			css: [],
			javascript: [],
			python: [],
			frontend: [],
			backend: [],
			junoir: [],
			midweight: [],
			senior: [],
		},
		displayData: [],
	};

	componentDidMount() {
		const { searchField } = this.state;
		if (searchField.length === 0) {
			this.setState({ displayData: data }, () => this.filteredItems);
		}
		this.filteredItems("Frontend");
	}

	filteredItems = (itemsToFilter) => {
		return data.map((item) => {
			for (const key in item) {
				if (item[key] === itemsToFilter) {
					console.log(item);
				}
			}
		});

		// for (const key in object) {
		// 	if (object.hasOwnProperty(key)) {
		// 		const element = object[key];
		// 	}
		// }

		// const rendered = data.filter((item) =>
		// 	Object.keys(item).filter((val) => {
		// 		if (item[val] !== itemsToFilter) {
		// 			return item;
		// 		}
		// 	})
		// );

		// console.log(rendered);
	};

	onChange = () => {};

	render() {
		return (
			<div className="joblist__preview">
				{data.map((item) => (
					<JobListItem key={item.id} item={item} onChange={this.onChange} />
				))}
			</div>
		);
	}
}

export default JobListPreview;
