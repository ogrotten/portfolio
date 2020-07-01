import React from 'react';
import { Route, withRouter } from "react-router-dom";

import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Head from './Head.js';
import Foot from './Foot.js';

import Hilights from '../Hilights.js';
import Projects from '../Projects.js';
import Feed from '../Feed.js';

export default function Main() {
	return (
		<div className="container">
			<Head />
			
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/hilights" component={Hilights} />

			<Foot />
		</div>
	)
}
