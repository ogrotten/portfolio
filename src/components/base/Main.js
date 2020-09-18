import React from 'react';
import { Route, withRouter } from "react-router-dom";
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Home from '../Home.js';
import Skills from '../Skills.js';
import Projects from '../Projects.js';
import Feed from '../Feed.js';

import FourOhFour from '../base/FourOhFour.js';

export default function Main() {
	return (
		<>
			<Route exact path="/" component={Home} />
			<Route exact path="/feed" component={Feed} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/skills" component={Skills} />
			{/* <Route path="/" component={FourOhFour} /> */}
		</>
	) 
}
