import React from 'react';
import { Route, withRouter, useHistory } from "react-router-dom";

import './sass/style.scss';

import Main from './components/base/Main.js';
import Head from './components/base/Head.js';
import Foot from './components/base/Foot.js';

function App(props) {
	let history = useHistory();
	let className =
		history.location.pathname === "/"
			? "scrolly"
			: "main"
	return (
		<div className={className}>
			<Route path="/" component={Head} />
			<Main />
			<Foot />
		</div>
	);
}

export default App;
