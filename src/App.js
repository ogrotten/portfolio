import React from 'react';
import { Route, withRouter, useHistory } from "react-router-dom";

import './sass/style.scss';

import Main from './components/base/Main.js';
import Head from './components/base/Head.js';
import Foot from './components/base/Foot.js';

function App(props) {
	let history = useHistory();
	let className, inject
	if (history.location.pathname === "/") {
		className = "scrolly"
		inject = (
			<>
				{/* <div className="mainbg"></div> */}
				<div className="cover"></div>
			</>
		)
	} else {
		className = "main"
		inject = (<></>)
	}
	return (
		<>
			<div className={className}>
			{inject}
				<Route path="/" component={Head} />
				<Main />
				<Foot />
			</div>
		</>
	);
}

export default App;
