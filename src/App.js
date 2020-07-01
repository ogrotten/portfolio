import React from 'react';
import { Route, withRouter } from "react-router-dom";

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
			<Route exact path="/" component={Home} />

			<Main />
		</RecoilRoot>
	);
}

export default App;
