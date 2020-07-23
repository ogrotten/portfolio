import React from 'react';
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export default function Head(props) {

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
					<a className="button" alt="History" href="#history">Highlights</a>
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
				<div className="right">RIGHT</div>
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
}
