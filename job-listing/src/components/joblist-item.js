import React from "react";
import "../styles.scss";

const JobListItem = ({ item, handleClick }) => {
	const { company, featured, contract, newArrival, id, position, logo, role, level, languages, tools, location, postedAt } = item;
	return (
		<div className={`joblist__item ${featured ? "border-left" : ""}`}>
			<div className="joblist__item--profile">
				<div className="joblist__item--logo">
					<img src={logo} alt={`logo-${id}`} />
				</div>
				<div className="joblist__item--content">
					<div className="content__header">
						<span className="company">{company}</span>
						{newArrival ? <span className="new">new!</span> : null}
						{featured ? <span className="featured">featured!</span> : null}
					</div>
					<div className="content__position">
						<h1>{position}</h1>
					</div>
					<div className="content__footer">
						<span className="content__footer--item">{postedAt}</span>
						<span className="content__footer--item-border"></span>
						<span className="content__footer--item">{contract}</span>
						<span className="content__footer--item-border"></span>
						<span className="content__footer--item">{location}</span>
					</div>
				</div>
			</div>
			<div className="joblist__item--detail">
				<div className="filterBtn" onClick={handleClick}>
					{role}
				</div>
				<div className="filterBtn" onClick={handleClick}>
					{level}
				</div>
				{languages
					? languages.map((item) => (
							<div className="filterBtn" onClick={handleClick} key={languages.indexOf(item)}>
								{item}
							</div>
					  ))
					: null}
				{tools
					? tools.map((item) => (
							<div className="filterBtn" onClick={handleClick} key={tools.indexOf(item)}>
								{item}
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default JobListItem;
