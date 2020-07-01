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
import SideNav from './components/base/SideNav.js';
import Feed from './components/feed.js';


function App() {
	return (
		<div class="container">
			<RecoilRoot>
				<SideNav>
					<Feed />
				</SideNav>
				<Main />
			</RecoilRoot>
		</div>
	);
}

export default App;
