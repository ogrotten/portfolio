import React, { useState, useEffect } from 'react';
import { Route, useLocation, useHistory } from "react-router-dom";
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import './sass/style.scss';

import Main from './components/base/Main.js';
import Head from './components/base/Head.js';
import Foot from './components/base/Foot.js';

import Home from './components/Home.js';
// import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Hilights from './components/Hilights.js';
import Feed from './components/Feed.js';

function App(props) {
	const location = useLocation();
	const [className, setClassName] = useState("")
	const [inject, setInject] = useState()

	useEffect(() => {
		if (location.pathname === "/") {
			setClassName("scrolly")
			setInject(
				<>
					{/* <div className="mainbg"></div> */}
					<div className="cover"></div>
				</>
			)
		} else {
			setClassName("main")
			setInject(<></>)
		}
	}, [location])

	return (
		<>
			<div className={className}>
				{inject}
				<Head />

				<Route exact path="/" component={Home} />
				<Route exact path="/feed" component={Feed} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/hilights" component={Hilights} />
				{/* <Route exact path="/skills" component={Skills} /> */}

				<Foot />
			</div>
		</>
	);
}

export default App;
