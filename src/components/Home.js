import React from 'react';
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import Logos from './Logos.js'

export default function Home() {
	return (
		<>
			<section className="intro">
				<article>
					<p>I am a graduate of the Full Stack Web track of Lambda School. Completed the 4 Units of primary and Computer Science instruction with high marks, completed Lambda Labs project with high marks.</p>
					<p>Previously, I have owned team-developed websites for 10 years, and self-taught JavaScript and NodeJS. I was also an IT professional, primarily in support roles.</p>
					<p>As a technologist, I have been drawn more to programming and development than support. I realized that I needed to grow and refine my dev skills and therefore attended Lambda School.</p>
					<p>I am a family man with 5 kids, and enjoy the challenges and rewards that have come with that role.
                </p>
				</article>
				<div className="profile">
					<img src="./img/HEADshot.jpg" alt="" srcSet="" />
					<div className="links">
						<p><a>dlowery@monsto.com</a></p>
						<p>
							<a alt="LinkedIn" href="https://www.linkedin.com/in/https://www.linkedin.com/in/darrinlowerykc//" target="blank" alt="LinkedIn"><i className="fab fa-linkedin"></i></a>
							<a alt="Github" href="https://github.com/ogrotten" target="blank" alt="github"><i className="fab fa-github"></i></a>
							<a alt="Dev.to" href="https://dev.to/ogrotten" target="blank" alt="dev.to"><i className="fab fa-dev"></i></a>
						</p>
					</div>
				</div>
			</section>
			<hr />
			<section className="skills">
				<Logos />
			</section>
		</>
	)
}
