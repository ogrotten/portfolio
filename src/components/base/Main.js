import React from 'react';
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Head from './Head.js';
import Foot from './Foot.js';

export default function Main() {
	return (
		<div className="main">
			<Head />
			<Foot />
		</div>
	)
}
