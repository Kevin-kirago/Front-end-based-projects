import React from "react";
import "../app/App.scss";

const JobListItem = ({ item: { company, featured, contract, newArrival, id, position, logo, role, level, languages, location, postedAt } }) => {
	return (
		<div className="joblist__item ">
			<div className="joblist__item--profile">
				<div className="joblist__item--logo">
					<img src={logo} alt={`logo-${id}`} />
				</div>
				<div className="joblist__item--content">
					<div className="content__header"></div>
					<div className="content__position">
						<h1>{position}</h1>
					</div>
					<div className="content__footer"></div>
				</div>
			</div>
			<div className="joblist__item--detail">
				<div className="filterBtn">{role}</div>
				<div className="filterBtn">{level}</div>
				{languages
					? languages.map((item) => (
							<div className="filterBtn" key={languages.indexOf(item)}>
								{item}
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default JobListItem;
