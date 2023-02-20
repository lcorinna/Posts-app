import { Link } from "react-router-dom";
import React from "react";

const About = () => {
	return (
		<div>
			<h1>
				The application is designed for the purpose of teaching tools and does not carry any practical benefit in itself.
			</h1>
			<h2>
				<Link to="https://t.me/gaydaychuk">My Telegram</Link>
			</h2>
			<h2>
				<Link to="https://github.com/lcorinna">My GitHub</Link>
			</h2>
		</div>
	);
};

export default About;