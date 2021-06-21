import React, { useState } from 'react';
import './MainNav.css';
import ArtistVisited from './ArtistVisited';

function MainNav() {
	let [artistVisited, initArtistVisited] = useState(false);

	const toggleArtistVisited = () => {
		initArtistVisited(artistVisited =! artistVisited);
	}

  return (
	  <>
		<nav className="main-nav">

			<div className="artist-dropdown" onClick={toggleArtistVisited}>
				<div className="artist-dropdown-btn">
					<svg className="grid-btn-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="1.76471" cy="1.76471" r="1.76471" fill="#2D2D2D"/>
						<circle cx="9.99908" cy="1.76471" r="1.76471" fill="#2D2D2D"/>
						<circle cx="18.2354" cy="1.76471" r="1.76471" fill="#2D2D2D"/>
						<circle cx="18.2354" cy="9.99981" r="1.76471" fill="#2D2D2D"/>
						<circle cx="18.2354" cy="18.2353" r="1.76471" fill="#2D2D2D"/>
						<circle cx="9.99908" cy="9.99981" r="1.76471" fill="#2D2D2D"/>
						<circle cx="9.99908" cy="18.2353" r="1.76471" fill="#2D2D2D"/>
						<circle cx="1.76471" cy="9.99981" r="1.76471" fill="#2D2D2D"/>
						<circle cx="1.76471" cy="18.2353" r="1.76471" fill="#2D2D2D"/>
					</svg>
					<p>Artist</p>
					<svg style={{ transform: !artistVisited? 'rotate(180deg)' : 'rotate(0deg)' }} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z" fill="#2D2D2D"/>
					</svg>
				</div>

				<div className="artist-dropdown-content">
					
				</div>
			</div>

			<div className="container-logo">
				<h1>Colors of africa</h1>
				<h2>See through the eyes of the inspired</h2>
			</div>

			<div className="about-item">
				<a href="/">
					<li>About</li>
				</a>
			</div>

		</nav>

		<ArtistVisited open={artistVisited} />
		
	</>
  );
}

export default MainNav;
