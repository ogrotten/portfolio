import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

const Head = withRouter(props => {

	const Header = (
		<header>
			<nav>
				<div className="logo">
					<h1>Darrin Lowery</h1>
					<p>Web Developer ● Design Analyst</p>
				</div>
				<div className="navlinks">
					<a className="button" alt="Skills" href="#skills">Skills</a>
					<a className="button" alt="Projects" href="#projects">Projects</a>
					<a className="button" alt="Hilights" href="#hilights">Highlights</a>
				</div>
			</nav>
		</header>
	)

	const homeHeader = (
		<nav className="homehead">
			<div className="homenav">
				<div className="left logo">
					<h1>Darrin Lowery</h1>
					<p>Web Developer ● Design Analyst</p>
				</div>
				<div className="homelinks">
					<Link to="/skills" alt="Skills & Qualities"><h2>Skills</h2></Link>
					<Link to="/projects"><h2>Projects</h2></Link>
					<Link to="/hilights"><h2>Highlights</h2></Link>
					<Link to="/feed"><h2>Feed</h2></Link>
				</div>
			</div>
		</nav>
	)

	return (
		<>
			{
				props.location.pathname === "/"
					? homeHeader
					: Header
			}
		</>
	)
})

export default Head;