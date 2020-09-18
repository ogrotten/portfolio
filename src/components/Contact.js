import React from 'react';
import { Route, withRouter, useHistory } from "react-router-dom";

import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export default function Skills() {
	let history = useHistory();
	console.log(10, history.location.pathname);
	return (
		<div className="Projects" style={{ width: "50%", minWidth: "400px" }}>
			<section className="item-rev">
				<article>
					<p>email:&nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:dlowery@darrin.digital">dlowery@darrin.digital</a></p>
					<p><i className="fab fa-linkedin"></i>LinkedIn:&nbsp;&nbsp;&nbsp;&nbsp;<a alt="LinkedIn" href="https://www.linkedin.com/in/darrinlowerykc/" target="blank" alt="LinkedIn">darrinlowerykc</a></p>
					<p><i className="fab fa-github"></i>Github:&nbsp;&nbsp;&nbsp;&nbsp;<a alt="Github" href="https://github.com/ogrotten" target="blank" alt="github">ogrotten (Darrin Lowery)</a></p>
					<p><i className="fab fa-dev"></i>dev.to:&nbsp;&nbsp;&nbsp;&nbsp;<a alt="Dev.to" href="https://dev.to/ogrotten" target="blank" alt="dev.to">ogrotten (Darrin Lowery)</a></p>
				</article>
			</section>
		</div>
	)
}