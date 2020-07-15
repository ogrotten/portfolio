import React from 'react';
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export default function Head(props) {
	console.log(10, props.location.pathname);

	const nay = (
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

	const boo = (<></>)

	return (
		<>
			{
				props.location.pathname === "/"
					? boo
					: nay
			}
		</>
	)
}
