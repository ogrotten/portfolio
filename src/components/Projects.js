import React from 'react';
import { Route, withRouter, useHistory } from "react-router-dom";
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export default function Projects() {
	let history = useHistory();
	console.log(10, history.location.pathname);
	return (
		<div className="Projects">
			<section class="item-rev">
				<article>
					<h2>Conference Builder for EthosCE.com</h2>
					<p class="subtitle">Contract Project, 2020</p>
					<p>EthosCE provides a learning management system (LMS) for medical associations, academic medical centers, health systems. It is used by medical professionals for ongoing education.</p>
					<p>This web application allows the user to build a conference schedule across days, sessions and presentations, with presenters and class credit types. Data is stored on the browser using IndexedDB without a backend.</p>
					<p>React, Ant Design, ContextAPI, DexieJS/IndexedDB.</p>
				</article>
				<div class="blurb">
					<img src="./img/YAT.png" alt="Conference Builder Screenshot" />
					<p>
						{/* <a alt="AlpacaVids demo site" class="live" href="https://alpacavids.com" target="blank"><i class="fas fa-link"></i>alpacavids.com</a>
						<a alt="Alpacavids Frontend Source" class="github" href="https://github.com/AlpacaVids/video-journal-for-teams-fe" target="blank"><i class="fab fa-github"></i>Frontend Source</a>
						<a alt="Alpacavids Backend Source" class="github" href="https://github.com/AlpacaVids/video-journal-for-teams-be" target="blank"><i class="fab fa-github"></i>Backend Source</a> */}
					</p>
				</div>
			</section>
			<section class="item">
				<article>
					<h2>Primitive Quotient: The Roaming Survey</h2>
					<p class="subtitle">Contract Project, 2020</p>
					<p>A personality quiz website as companion content with the book "Primitive: Tapping the Primal Drive."</p>
					<p>The quiz provides a score, a comparison chart of your score and other takers, text analysis of your results, and the option to email the results. You may also invite someone by email to the quiz.</p>
					<p>React, NodeJS, PostgreSQL, Styled Components, Sendgrid.</p>
				</article>
				<div class="blurb">
					<img src="./img/PQ.png" alt="Primitive Quiz Screenshot" />
					<p>
						{/* <a alt="Celeb DOA Admin page" class="github" href="https://darrin-lowery-celebdoaadmin.netlify.app/admin" target="blank"><i class="fas fa-link"></i>Admin Page</a>
						<a alt="Celeb DOA React Source" class="github" href="https://github.com/AlpacaVids/video-journal-for-teams-fe" target="blank"><i class="fab fa-github"></i>React Source</a>
						<a alt="Celeb DOA Node Source" class="github" href="https://github.com/celebrity-dead-or-alive-1/BE" target="blank"><i class="fab fa-github"></i>Node Source</a>
						<a alt="Celeb DOA Demo Video" class="live" href="https://drive.google.com/open?id=1jeDON4cNqdQDp7TuZw6MJReUUC8Z7Kec" target="blank"><i class="fas fa-video"></i>iOS demo video</a> */}
					</p>
				</div>
			</section>
			<section class="item-rev">
				<article>
					<h2>Alpaca Vids</h2>
					<p class="subtitle">Lambda School Labs, 2020.</p>
					<p>Scheduling face-to-face time with mentors for practicing interviews can be a challenging act of calendar blocking and synchronicity.</p>
					<p>Alpaca Vids resolves this issue with a team-based, asynchronous tool for students to create interview practice recordings and receive feedback.</p>
					<p>React, NodeJS, PostgreSQL, Ant Design, KnexJS, Jest.</p>
				</article>
				<div class="blurb">
					<img src="./img/AlpVids.png" alt="AlpacaVids Screenshot" />
					<p>
						<a alt="AlpacaVids demo site" class="live" href="https://alpacavids.netlify.app" target="blank"><i class="fas fa-link"></i>Demo on Netlify</a>
						<a alt="Alpacavids Frontend Source" class="github" href="https://github.com/AlpacaVids/video-journal-for-teams-fe" target="blank"><i class="fab fa-github"></i>Frontend Source</a>
						<a alt="Alpacavids Backend Source" class="github" href="https://github.com/AlpacaVids/video-journal-for-teams-be" target="blank"><i class="fab fa-github"></i>Backend Source</a>
					</p>
				</div>
			</section>
			<section class="item">
				<article>
					<h2>Celebrity Dead or Alive Quiz</h2>
					<p class="subtitle">Lambda School, Build Week - 2020</p>
					<p>A fun little quiz to show how well the user has kept up with the "living" status of celebrities.</p>
					<p>This was a Lambda Build Week group project, showing proof of skills learned from Unit 2 (Advanced JS, React) and Unit 4 (Node/Express Backend).</p>
					<p>React, React Bootstrap, NodeJS, PostgreSQL, KnexJS, Jest.</p>
				</article>
				<div class="blurb">
					{/* <!-- <img src="https://i.imgur.com/AR7gcOl.png" alt="AlpacaVids Screenshot"> --> */}
					<p>
						<a alt="Celeb DOA Admin page" class="github" href="https://darrin-lowery-celebdoaadmin.netlify.app/admin" target="blank"><i class="fas fa-link"></i>Admin Page</a>
						<a alt="Celeb DOA React Source" class="github" href="https://github.com/AlpacaVids/video-journal-for-teams-fe" target="blank"><i class="fab fa-github"></i>React Source</a>
						<a alt="Celeb DOA Node Source" class="github" href="https://github.com/celebrity-dead-or-alive-1/BE" target="blank"><i class="fab fa-github"></i>Node Source</a>
						<a alt="Celeb DOA Demo Video" class="live" href="https://drive.google.com/open?id=1jeDON4cNqdQDp7TuZw6MJReUUC8Z7Kec" target="blank"><i class="fas fa-video"></i>iOS demo video</a>
					</p>
				</div>
			</section>
			<section class="item-rev">
				<article>
					<h2>megan</h2>
					<p class="subtitle">(Meganote) Personal - 2020</p>
					<p>A locally used, portable application for taking and organizing personal notes.</p>
					<p>megan is a Progressive Web App. It uses React and modern browser technology and has no dedicated backend. It is a completely self-contained, database driven app.</p>
					<p>React, Semantic-UI, Dexie ORM with IndexedDB. </p>
				</article>
				<div class="blurb">
					<p>
						{/* <!-- <a alt="megan application link" class="live" href="https://alpacavids.com" target="blank">megan (live)</a> --> */}
                    <a alt="megan source" class="github" href="https://github.com/ogrotten/megan" target="blank"><i class="fab fa-github"></i>Source</a>
					</p>
				</div>
			</section>
		</div>
	)
}
