import React from 'react';
import './sass/style.scss';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Main from './components/base/Main.js';
import Head from './components/base/Head.js';
import Foot from './components/base/Foot.js';


function App() {
	return (
		<div class="container">
			<RecoilRoot>
				<Head />
				<Main />
				<Foot />
			</RecoilRoot>
		</div>
	);
}

export default App;
