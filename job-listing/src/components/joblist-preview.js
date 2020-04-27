import React from "react";
import data from "../data/data.json";
import JobListItem from "./joblist-item";

const JobListPreview = () => {
	return (
		<div className="joblist_preview">
			{data.map((item) => (
				<JobListItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default JobListPreview;
