import React, { useState, useEffect } from 'react';
import { Route, withRouter, useHistory } from "react-router-dom";
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
import Experience from './components/Experience.js';
import Feed from './components/Feed.js';

function App(props) {
	const history = useHistory();
	const [current, setCurrent] = useState(history.location.pathname);
	const [className, setClassName] = useState("scrolly")
	const [inject, setInject] = useState(
		<>
			{/* <div className="mainbg"></div> */}
			<div className="cover"></div>
		</>
	)

	if (current !== history.location.pathname) {
		setCurrent(history.location.pathname)
	}

	useEffect(() => {
		if (current === "/") {
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
	}, [current])

	return (
		<>
			<div className={className}>
				{inject}
				<Head />

				<Route exact path="/" component={Home} />
				<Route exact path="/feed" component={Feed} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/experience" component={Experience} />
				{/* <Route exact path="/skills" component={Skills} /> */}

				<Foot />
			</div>
		</>
	);
}

export default App;
