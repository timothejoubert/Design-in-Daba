import React, { useState, useEffect } from 'react';
import ArtistVisited from './ArtistVisited';
import './MainNav.css';

function MainNav( { data, changeCountry, newColor, handleAbout, aboutOpenBool, handleArtistNav, ArtistNavBool }) {

	function CloseBtn(){
		return <div className="close-about-btn"></div>
	}

	return (
		<>
			<nav className="main-nav" style={ !aboutOpenBool ? { backgroundColor: newColor  } : {backgroundColor: 'transparent'} }>

				<div className="artist-dropdown">
					
					<div className="artist-dropdown-btn" onClick={handleArtistNav}>
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
						<svg style={{ transform: ArtistNavBool ? 'rotate(0deg)' : 'rotate(180deg)' }} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z" fill="#2D2D2D"/>
						</svg>
					</div>

					<ArtistVisited open={ArtistNavBool} data={data} changeCountry={changeCountry} />

				</div>

				<div className="container-logo">
					<h1>Colors of africa</h1>
					<h2>See through the eyes of the inspired</h2>
				</div>

				<div className="about-item">
					<div className="container-about-item" onClick={() => handleAbout(window.scrollY)}>
						<li>About</li>
						{aboutOpenBool && <CloseBtn /> }
					</div>
				</div>

			</nav>
			
		</>
	);
}

export default MainNav;
