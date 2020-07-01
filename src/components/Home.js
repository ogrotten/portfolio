import React from 'react';
import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export default function Home() {
	return (
		<div className="over">
			<div className="mainbg"></div>
			<div className="cover"></div>

		
			<section className="intro">
				<article>
					<p>I am a graduate of the Full Stack Web track of Lambda School. Completed the 4 Units of primary and Computer Science instruction with high marks, completed Lambda Labs project with high marks.</p>
					<p>Previously, I have owned team-developed websites for 10 years, and self-taught JavaScript and NodeJS. I was also an IT professional, primarily in support roles.</p>
					<p>As a technologist, I have been drawn more to programming and development than support. I realized that I needed to grow and refine my dev skills and therefore attended Lambda School.</p>
					<p>I am a family man with 5 kids, and enjoy the challenges and rewards that have come with that role.</p>
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
				<article className="logos">
					<span className="logo art obtained from https://github.com/konpa/devicon" />
					<svg width="54px" height="54px" className="logo" viewBox="0 0 128 128">
						<title>CSS3</title>
						<path fill="#1572B6"
							d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
						<path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
						<path fill="#fff"
							d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z">
						</path>
						<path fill="#EBEBEB"
							d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z">
						</path>
						<path fill="#fff"
							d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z">
						</path>
						<path fill="#EBEBEB"
							d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z">
						</path>
					</svg>
					<svg width="54px" height="54px" className="logo" viewBox="0 0 128 128">
						<title>HTML5</title>

						<path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z">
						</path>
						<path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path>
						<path fill="#EBEBEB"
							d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z">
						</path>
						<path fill="#fff"
							d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z">
						</path>
					</svg>
					<svg width="54px" height="54px" className="logo" viewBox="0 0 128 128">
						<title>JavaScript</title>

						<path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path>
						<path fill="#323330"
							d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z">
						</path>
					</svg>
					<svg width="54px" height="54px" className="logo" viewBox="0 0 256 230" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
						<title>ReactJS</title>

						<path
							d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
							fill="#FFF" />
						<path
							d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
							fill="#53C1DE" />
						<path
							d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
							fill="#FFF" />
						<path
							d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
							fill="#53C1DE" />
					</svg>
					<svg width="54px" height="54px" className="logo" viewBox="0 0 128 128" style={{ transform: "scale(1.2, 1.2)" }}>
						<title>NodeJS</title>

						<path fill="#83CD29"
							d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z">
						</path>
					</svg>
					<svg width="54px" height="54px" className="logo" viewBox="0 0 128 128">
						<title>PostgreSQL</title>

						<path fillRule="evenodd" clipRule="evenodd" fill="#336791"
							d="M63.409 100.219c1.792 1.482 3.893 2.114 6.161 2.231.938.049 1.903.003 2.826-.165 1.464-.266 2.924-.6 4.348-1.029 2.9-.875 5.406-2.387 7.277-4.829 1.066-1.392 1.941-2.897 2.503-4.561.464-1.373.9-2.76 1.247-4.165.274-1.107.41-2.25.576-3.381.111-.748.178-1.504.247-2.259.112-1.225.229-2.448.31-3.676.057-.854.055-1.712.088-2.567.011-.261.053-.52.078-.779.021-.241.143-.324.389-.32.864.013 1.73.035 2.593-.004.967-.043 1.941-.085 2.893-.244 1.354-.227 2.701-.514 4.028-.86 1.568-.411 3.007-1.146 4.393-1.982 1.612-.975 3.084-2.118 4.275-3.591 1.039-1.282 1.531-2.768 1.28-4.389-.364-2.355-2.343-3.898-4.644-4.003-.834-.038-1.68.05-2.51.155-1.005.128-1.995.354-2.997.503-.692.104-1.393.15-2.083.222l-.019-.09c1.29-2.437 2.634-4.846 3.854-7.316.937-1.896 1.737-3.859 2.564-5.809 1.37-3.228 2.463-6.555 3.369-9.938.867-3.238 1.609-6.511 1.844-9.871.094-1.341.159-2.688.15-4.031-.006-1.072-.122-2.145-.229-3.213-.122-1.224-.492-2.384-1.004-3.5-.674-1.472-1.721-2.679-2.822-3.825-.881-.918-1.851-1.754-2.812-2.59-1.371-1.192-2.913-2.145-4.513-2.99-1.819-.96-3.73-1.712-5.724-2.22-1.206-.307-2.438-.578-3.658-.821-.436-.088-.876-.312-1.315-.312h-8.268c-.299 0-.595.196-.896.229-1.979.221-3.935.615-5.835 1.205-.71.219-1.358.091-2.033.028-.518-.048-1.027-.181-1.545-.207-1.971-.098-3.944-.24-5.916-.219-1.888.02-3.757.332-5.584.85-1.529.436-3.026.965-4.398 1.77-.586.344-1.052.279-1.659.105-2.041-.589-4.095-1.141-6.166-1.604-1.291-.289-2.62-.435-3.939-.571-1.265-.132-2.537-.21-3.809-.237-1.242-.027-2.492-.026-3.729.084-1.969.175-3.9.575-5.778 1.221-2.085.718-3.997 1.757-5.72 3.121-1.75 1.385-3.154 3.074-4.281 5.005-1.189 2.037-2.006 4.218-2.512 6.507-.275 1.241-.174 2.517-.363 3.777-.058.39.059.782.059 1.174v5.485c0 .364-.107.729-.061 1.095.113.879.074 1.765.223 2.638.234 1.382.445 2.759.729 4.131.397 1.917.776 3.832 1.216 5.74.32 1.389.667 2.77 1.048 4.143.58 2.098 1.146 4.199 1.803 6.272.611 1.927 1.307 3.826 2.002 5.726.962 2.628 2.11 5.171 3.49 7.607 1.195 2.111 2.558 4.088 4.388 5.713 1.207 1.072 2.548 1.895 4.109 2.307 1.228.322 2.478.361 3.733.104 1.457-.298 2.748-.926 3.895-1.865.132-.107.275-.19.432.008.594.752 1.388 1.254 2.219 1.687 2.242 1.17 4.685 1.521 7.166 1.663.602.034 1.208-.052 1.813-.068 1.181-.033 2.327-.263 3.454-.589.592-.171 1.169-.389 1.771-.591.031.641.071 1.257.091 1.874l.083 3.363c.016.512.036 1.024.083 1.534.122 1.314.241 2.628.398 3.938.108.903.222 1.812.434 2.694.428 1.778 1.006 3.509 1.742 5.188.721 1.646 1.76 3.037 3.148 4.184zm-3.591-16.768c-.071-1.579-.124-3.159-.159-4.739-.042-1.942-.056-3.885-.083-5.827l-.005-.074c-.987.593-1.96 1.241-2.989 1.776-1.207.627-2.517.99-3.874 1.093-1.063.08-2.142.153-3.2.069-1.736-.141-3.472-.412-5.026-1.268-.63-.347-1.288-.77-1.723-1.323-1.041-1.329-.542-3.008 1.028-3.816 1.085-.56 2.269-.793 3.445-1.065 1.021-.236 2.039-.505 3.036-.83.986-.323 1.608-1.123 2.223-1.908l.974-1.252-1.171-.122c-1.162-.108-2.271-.429-3.331-.899-.906-.401-.92-.445-1.586.277-1.11 1.205-2.19 2.44-3.279 3.666-.801.902-1.596 1.809-2.395 2.714-.788.895-1.528 1.84-2.379 2.672-1.262 1.236-2.784 1.979-4.6 1.895-1.165-.054-2.231-.462-3.191-1.129-1.979-1.378-3.312-3.308-4.527-5.333-1.555-2.596-2.75-5.361-3.771-8.201-.707-1.964-1.418-3.929-2.034-5.921-.671-2.165-1.26-4.355-1.839-6.547-.438-1.653-.826-3.32-1.196-4.99-.421-1.899-.825-3.803-1.182-5.715-.241-1.291-.38-2.601-.575-3.9-.263-1.753-.311-3.52-.215-5.279.085-1.585.312-3.165.538-4.739.313-2.178 1.031-4.233 2.063-6.174.633-1.189 1.416-2.27 2.323-3.274 1.49-1.649 3.293-2.84 5.299-3.735 1.401-.625 2.882-1 4.391-1.295 2.24-.436 4.5-.418 6.76-.372.988.021 1.973.2 2.96.299 2.126.211 4.209.659 6.266 1.21 1.5.402 2.969.924 4.455 1.376.148.045.367.041.49-.038 2.015-1.316 4.216-2.184 6.559-2.681.889-.188 1.807-.271 2.716-.329 1.104-.069 2.219-.135 3.321-.07 1.325.076 2.646.271 3.963.451.64.088 1.264.309 1.904.369.308.029.633-.194.957-.27 1.654-.383 3.301-.808 4.97-1.109 1.242-.224 2.512-.33 3.774-.402 1.41-.081 2.828-.14 4.236-.072 1.78.086 3.547.339 5.291.745 2.162.503 4.234 1.233 6.205 2.247 1.473.759 2.872 1.637 4.133 2.717.826.709 1.672 1.408 2.417 2.198.92.974 1.858 1.947 2.436 3.194.435.941.745 1.915.831 2.944.106 1.281.235 2.566.224 3.849-.011 1.226-.179 2.451-.297 3.675-.271 2.788-.876 5.516-1.613 8.208-.607 2.223-1.319 4.422-2.089 6.596-.709 2.003-1.528 3.969-2.355 5.928-.611 1.448-1.27 2.881-1.984 4.281-1.354 2.652-2.762 5.277-4.391 7.777-.281.431-.548.873-.822 1.314.711.479 1.516.648 2.326.736.771.083 1.557.134 2.327.076 1.233-.092 2.462-.268 3.688-.439 1.214-.17 2.403-.515 3.651-.424 1.244.091 2.136 1.037 2.051 2.203-.054.738-.393 1.371-.883 1.912-2.315 2.554-5.221 4.102-8.545 4.865-1.263.29-2.565.439-3.858.56-1.101.102-2.216.119-3.321.078-.812-.03-1.617-.216-2.447-.336-.084.759-.163 1.55-.259 2.338l-.387 3.023c-.117.958-.208 1.92-.329 2.878-.118.93-.265 1.855-.389 2.784-.115.865-.2 1.735-.33 2.599-.197 1.324-.386 2.651-.645 3.965-.31 1.57-.784 3.09-1.561 4.507-.946 1.729-2.287 3.046-3.995 4.021-1.76 1.005-3.685 1.528-5.634 1.966-1.382.311-2.803.361-4.202.234-2.425-.219-4.495-1.256-6.06-3.137-1.493-1.795-2.504-3.851-2.865-6.18-.174-1.107-.298-2.223-.396-3.339-.112-1.243-.186-2.487-.244-3.732zM62.544 67.497c.015.83-.071 1.66-.067 2.49.017 3.863.045 7.727.078 11.591.006.631.037 1.264.082 1.894.095 1.32.189 2.641.317 3.957.092.935.217 1.867.364 2.795.21 1.313.808 2.483 1.486 3.602.584.962 1.345 1.778 2.346 2.342 1.702.957 3.533 1.037 5.379.685 1.247-.237 2.473-.62 3.683-1.015 1.194-.389 2.273-1.024 3.178-1.901.849-.822 1.451-1.825 1.857-2.932.787-2.146 1.034-4.407 1.359-6.649.122-.84.228-1.682.339-2.523.127-.957.255-1.913.377-2.87.092-.714.174-1.427.261-2.14.125-1.024.256-2.047.375-3.071.091-.792.167-1.587.249-2.381.104-1.015.215-2.027.306-3.044.068-.77.04-1.555.177-2.312.251-1.387.907-2.567 2.137-3.331.514-.318 1.096-.528 1.666-.798l-.098-.149c-.527-.684-1.067-1.357-1.584-2.049-.812-1.086-1.396-2.297-1.983-3.514-.556-1.154-1.236-2.246-1.821-3.387-1.021-1.99-2.061-3.975-3.002-6.002-1.183-2.55-2.115-5.188-2.408-8.012-.125-1.194-.157-2.388.086-3.571.387-1.89 1.373-3.368 3.033-4.382 1.54-.94 3.255-1.244 5.012-1.339 1.09-.059 2.187-.011 3.318-.011l-.037-.191c-.704-1.472-1.361-2.969-2.132-4.405-1.086-2.028-2.478-3.856-4.026-5.553-1.146-1.255-2.389-2.419-3.75-3.45-1.338-1.013-2.748-1.918-4.253-2.657-1.794-.883-3.664-1.565-5.624-2-1.885-.418-3.78-.674-5.714-.695-1.648-.018-3.286.058-4.892.429-2.424.561-4.641 1.559-6.568 3.175-1.077.903-2.018 1.916-2.839 3.044-.967 1.325-1.745 2.759-2.411 4.26-.914 2.061-1.541 4.204-1.971 6.408-.214 1.1-.382 2.207-.553 3.314-.06.389-.064.784-.1 1.229l.732-.381.714-.32c2.417-1.105 4.92-1.816 7.61-1.735 1.144.034 2.236.261 3.254.762 1.95.962 3.09 2.597 3.586 4.665.342 1.428.577 2.884.805 4.337.178 1.134.361 2.28.381 3.424.029 1.672-.055 3.348-.146 5.019-.077 1.424-.374 2.825-.872 4.154-.904 2.416-1.912 4.793-2.853 7.195-.311.794-.55 1.615-.843 2.488l1.188.001c.144.003.291.007.43.04 1.081.255 2.02.745 2.789 1.577 1.028 1.104 1.566 2.396 1.593 3.893zM41.897 56.042c-.614-1.454-.983-2.971-1.094-4.538-.104-1.474.071-2.94.223-4.408.146-1.421.27-2.849.312-4.275.071-2.347-.087-4.688-.199-7.033-.067-1.396.095-2.809.219-4.208.112-1.26.252-2.523.491-3.765.399-2.084.93-4.138 1.685-6.129.715-1.888 1.539-3.725 2.699-5.38.797-1.136 1.699-2.195 2.566-3.305l-.258-.092c-2.823-.896-5.693-1.598-8.646-1.903-1.395-.145-2.796-.229-4.195-.313-.43-.025-.866.033-1.297.074-1.067.103-2.148.143-3.198.343-1.787.34-3.502.912-5.089 1.843-1.426.836-2.623 1.915-3.626 3.211-1.107 1.431-1.854 3.049-2.389 4.773-.632 2.035-.934 4.13-1.015 6.243-.071 1.853-.106 3.716.214 5.562.237 1.373.396 2.762.658 4.131.358 1.865.742 3.727 1.186 5.573.633 2.644 1.267 5.29 2.018 7.902.718 2.501 1.527 4.98 2.407 7.43.718 1.999 1.549 3.961 2.424 5.896.57 1.261 1.26 2.475 1.984 3.655.769 1.254 1.645 2.444 2.831 3.354 1.499 1.148 2.658 1.327 4.182.066.652-.539 1.203-1.207 1.771-1.842.901-1.008 1.771-2.046 2.669-3.059 1.143-1.289 2.3-2.565 3.449-3.85.243-.271.478-.551.714-.825l-.393-.343c-1.425-1.372-2.531-2.962-3.303-4.788zM85.238 17.639c.934 1.095 1.838 2.222 2.672 3.394 1.614 2.268 2.904 4.716 3.855 7.336.42 1.155.756 2.321.606 3.584-.104.885-.097 1.782-.174 2.672-.065.74-.183 1.476-.278 2.214-.144 1.112-.352 2.222-.414 3.339-.06 1.064.003 2.138.07 3.203.067 1.083.213 2.161.312 3.241.112 1.227.264 2.451.298 3.68.028 1.008-.062 2.021-.149 3.029-.105 1.213-.412 2.387-.87 3.512-.323.794-.708 1.562-1.071 2.356l.146.154.222.172.225-.4c1.888-2.977 3.568-6.068 5.021-9.277.938-2.066 1.812-4.162 2.654-6.27 1.311-3.281 2.35-6.653 3.151-10.094.36-1.544.636-3.112.88-4.68.191-1.226.349-2.466.385-3.703.037-1.312-.035-2.634-.156-3.942-.091-.988-.335-1.982-.953-2.787-.996-1.293-2.07-2.529-3.391-3.508-1.113-.823-2.223-1.67-3.416-2.362-1.893-1.099-3.942-1.829-6.083-2.327-2.091-.487-4.207-.697-6.337-.742-1.256-.027-2.518.108-3.771.227-1.136.106-2.265.288-3.408.438 1.227.69 2.438 1.304 3.578 2.027 2.4 1.52 4.552 3.349 6.396 5.514zM54.058 60.202c.775-2.48 1.832-4.85 2.855-7.232.831-1.933 1.284-3.968 1.435-6.06.075-1.031.055-2.075.004-3.109-.057-1.148-.148-2.301-.316-3.438-.215-1.454-.459-2.909-.803-4.336-.373-1.544-1.313-2.62-2.925-3.017-.981-.241-1.957-.231-2.95-.074-2.423.381-4.641 1.274-6.707 2.582-.416.263-.646.476-.573 1.071.152 1.264.185 2.548.179 3.823-.008 1.805-.085 3.61-.153 5.414-.022.587-.107 1.173-.171 1.758-.096.896-.283 1.791-.277 2.686.006.922.1 1.865.324 2.758.711 2.832 2.215 5.148 4.682 6.783 1.517 1.006 3.195 1.512 5.038 1.609.122-.423.235-.822.358-1.218zm-2.896-24.289c-.325-.681-.139-1.246.613-1.508.184-.063.372-.133.562-.151.263-.026.528-.007.793-.007.955.006 1.873.139 2.66.745.506.39.642.905.314 1.437-.465.753-1.172 1.131-2.042 1.203-1.369.113-2.33-.525-2.9-1.719zM89.137 35.664l.311-2.725c.045-.364-.146-.464-.452-.473-.963-.026-1.925-.061-2.888-.077-1.084-.02-2.141.154-3.145.566-1.114.459-1.962 1.193-2.309 2.406-.259.904-.328 1.807-.236 2.752.139 1.441.459 2.839.963 4.18.674 1.793 1.378 3.585 2.221 5.303 1.141 2.325 2.431 4.577 3.643 6.867.323.611.597 1.25.934 1.963.707-1.496 1.051-2.994 1.09-4.538.033-1.301-.07-2.605-.146-3.906-.047-.796-.16-1.588-.237-2.382-.107-1.106-.271-2.213-.297-3.322-.025-1.128.055-2.262.151-3.389.09-1.078.268-2.149.397-3.225zm-2.169-.874c-.358.987-1.122 1.545-2.114 1.708-.924.153-1.734-.188-2.336-.926-.429-.525-.265-1.146.378-1.502.738-.408 1.549-.511 2.506-.573.261.047.651.088 1.023.193.539.152.739.56.543 1.1zM58.37 65.193c-.528-.432-1.228-.457-1.73.017-.624.59-1.173 1.264-1.722 1.928-.633.768-1.229 1.566-2.045 2.161-1.189.865-2.578 1.223-3.972 1.562-1.108.27-2.222.521-3.333.779l-.014.144c.33.152.649.343.994.452 1.695.536 3.42.804 5.212.652 1.292-.111 2.524-.393 3.691-.946 1.607-.761 2.844-1.968 3.895-3.37.176-.234.256-.58.276-.882.071-1.066-.47-1.859-1.252-2.497zM89.315 64.731c-.831.279-1.507.704-1.708 1.603-.137.608-.187 1.237-.24 1.86-.01.11.127.312.231.34.64.169 1.284.368 1.938.427.805.073 1.623.05 2.433.01.874-.044 1.754-.101 2.616-.245 2.029-.342 3.994-.896 5.738-2.048.63-.415 1.252-.839 1.878-1.261l-.052-.089c-.667.099-1.332.22-2.002.291-1.364.146-2.729.3-4.098.379-.661.038-1.331-.089-1.997-.143-1.118-.091-2.21-.339-3.155-.937-.545-.344-1.001-.382-1.582-.187z">
						</path>
						<path fill="#336791"
							d="M2.835 103.184c1.093-.182 2.522-.338 4.343-.338 2.235 0 3.874.52 4.914 1.456.962.832 1.534 2.106 1.534 3.667 0 1.586-.469 2.834-1.353 3.744-1.196 1.274-3.146 1.924-5.356 1.924-.676 0-1.3-.026-1.819-.156v7.021h-2.263v-17.318zm2.263 8.45c.494.13 1.118.182 1.872.182 2.729 0 4.394-1.326 4.394-3.744 0-2.314-1.638-3.432-4.134-3.432-.988 0-1.742.078-2.132.182v6.812zM27.328 114.104c0 4.654-3.225 6.683-6.267 6.683-3.406 0-6.032-2.496-6.032-6.475 0-4.212 2.756-6.682 6.24-6.682 3.615-.001 6.059 2.626 6.059 6.474zm-9.984.13c0 2.756 1.586 4.836 3.822 4.836 2.184 0 3.821-2.054 3.821-4.888 0-2.132-1.065-4.836-3.77-4.836s-3.873 2.496-3.873 4.888zM29.901 118.16c.676.442 1.872.91 3.016.91 1.664 0 2.444-.832 2.444-1.872 0-1.092-.649-1.69-2.34-2.314-2.262-.806-3.328-2.054-3.328-3.562 0-2.028 1.638-3.692 4.342-3.692 1.274 0 2.393.364 3.095.78l-.572 1.664c-.494-.312-1.404-.728-2.574-.728-1.352 0-2.106.78-2.106 1.716 0 1.04.755 1.508 2.393 2.132 2.184.832 3.302 1.924 3.302 3.796 0 2.21-1.716 3.77-4.706 3.77-1.378 0-2.652-.338-3.536-.858l.57-1.742zM43.266 104.301v3.614h3.275v1.742h-3.275v6.786c0 1.56.441 2.444 1.716 2.444.598 0 1.04-.078 1.326-.156l.104 1.716c-.441.182-1.144.312-2.027.312-1.066 0-1.925-.338-2.471-.962-.649-.676-.884-1.794-.884-3.276v-6.864h-1.95v-1.742h1.95v-3.016l2.236-.598zM59.802 107.916c-.053.91-.104 1.924-.104 3.458v7.306c0 2.886-.572 4.654-1.794 5.747-1.222 1.144-2.99 1.508-4.576 1.508-1.508 0-3.172-.364-4.187-1.04l.572-1.742c.832.52 2.132.988 3.692.988 2.34 0 4.056-1.222 4.056-4.394v-1.404h-.052c-.702 1.17-2.054 2.106-4.004 2.106-3.12 0-5.356-2.652-5.356-6.137 0-4.264 2.782-6.682 5.668-6.682 2.185 0 3.381 1.144 3.927 2.184h.052l.104-1.898h2.002zm-2.366 4.966c0-.39-.026-.728-.13-1.04-.416-1.326-1.534-2.418-3.198-2.418-2.185 0-3.744 1.846-3.744 4.758 0 2.47 1.248 4.524 3.718 4.524 1.404 0 2.678-.884 3.172-2.34.13-.39.183-.832.183-1.222v-2.262zM63.337 111.842c0-1.482-.026-2.756-.104-3.926h2.003l.077 2.47h.104c.572-1.69 1.95-2.756 3.484-2.756.26 0 .441.026.649.078v2.158c-.233-.052-.468-.078-.779-.078-1.612 0-2.757 1.222-3.068 2.938-.052.312-.104.676-.104 1.066v6.708h-2.262v-8.658zM72.854 114.624c.052 3.094 2.027 4.368 4.315 4.368 1.639 0 2.626-.286 3.484-.65l.39 1.638c-.806.364-2.184.78-4.186.78-3.874 0-6.188-2.548-6.188-6.344 0-3.796 2.236-6.787 5.902-6.787 4.108 0 5.2 3.614 5.2 5.928 0 .468-.052.832-.078 1.066h-8.839zm6.708-1.638c.025-1.456-.599-3.718-3.172-3.718-2.314 0-3.328 2.132-3.511 3.718h6.683zM84.371 117.744c1.014.624 2.496 1.144 4.056 1.144 2.314 0 3.666-1.222 3.666-2.99 0-1.638-.936-2.574-3.302-3.484-2.86-1.014-4.628-2.496-4.628-4.966 0-2.73 2.262-4.758 5.668-4.758 1.794 0 3.094.416 3.874.858l-.624 1.846c-.572-.312-1.742-.832-3.328-.832-2.392 0-3.302 1.43-3.302 2.626 0 1.638 1.065 2.444 3.484 3.38 2.964 1.145 4.472 2.574 4.472 5.148 0 2.704-2.002 5.044-6.136 5.044-1.69 0-3.536-.494-4.473-1.118l.573-1.898zM111.957 123.074c-2.366-.624-4.68-1.326-6.708-2.028-.364-.13-.728-.26-1.066-.26-4.16-.156-7.722-3.224-7.722-8.866 0-5.616 3.432-9.23 8.164-9.23 4.758 0 7.853 3.692 7.853 8.866 0 4.498-2.08 7.384-4.992 8.398v.104c1.742.442 3.64.858 5.122 1.118l-.651 1.898zm-1.872-11.414c0-3.51-1.819-7.125-5.538-7.125-3.822 0-5.694 3.536-5.668 7.333-.026 3.718 2.028 7.072 5.564 7.072 3.615 0 5.642-3.276 5.642-7.28zM115.414 102.976h2.263v15.626h7.488v1.898h-9.751v-17.524z">
						</path>
					</svg>
				</article>
			</section>
		</div>
	)
}
