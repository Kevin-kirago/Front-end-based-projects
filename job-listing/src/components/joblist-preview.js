import React from "react";
import data from "../data/data.js";
import JobListItem from "./joblist-item";

import "../app/App.scss";

const JobListPreview = () => {
	return (
		<div className="joblist__preview">
			{data.map((item) => (
				<JobListItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default JobListPreview;
