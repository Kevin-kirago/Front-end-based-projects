import React from "react";
import "./App.css";

import JobListPreview from "../components/joblist-preview";

const App = () => {
	return (
		<>
			<nav className="navbar"></nav>
			<main className="main-section">
				<JobListPreview />
			</main>
		</>
	);
};

export default App;
