import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './sass/style.scss';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Main from './components/base/Main.js';
import Home from './components/Home.js';


function App() {
	return (
		<RecoilRoot>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={Main} />
			</Switch>
		</RecoilRoot>
	);
}

export default App;
