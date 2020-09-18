import React from 'react';
import { Route, withRouter, useHistory } from "react-router-dom";
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export default function Feed() {
	let history = useHistory();
	console.log(10, history.location.pathname);
	return "feed"
}

