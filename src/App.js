import React from 'react';
import { Route, withRouter } from "react-router-dom";

import './sass/style.scss';

import Main from './components/base/Main.js';
import Head from './components/base/Head.js';
import Foot from './components/base/Foot.js';

function App(props) {
	
	let page = "beat"
	return (
		<div className="main">
			<Route path="/" component={Head} />
			<Main />
			<Foot />
		</div>
	);
}

export default App;

{/* <Switch>
	<Route exact path="/" component={Home} />
	<Route component={Main} />
</Switch> */}