import React from 'react';
import './App.css';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import HeadComp from './components/base/head.js';
import FootComp from './components/base/foot.js';
import NavComp from './components/base/nav.js';
import Feed from './components/feed.js';


function App() {
	return (
		<RecoilRoot>
			<HeadComp />
			<NavComp>
				<Feed />
			</NavComp>
			<FootComp />
		</RecoilRoot>
	);
}

export default App;
