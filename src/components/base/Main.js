import React from 'react';
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Home from '../Home.js';
import Hilights from '../Hilights.js';
import Projects from '../Projects.js';
import Feed from '../Feed.js';

export default function Main() {
	return (
		<div className="main">
			<Home />
		</div>
	)
}
