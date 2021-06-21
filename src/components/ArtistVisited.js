import React, { useEffect, useRef } from 'react';
import './ArtistVisited.css';

function ArtistVisited( { open }) {

	const contryVisited = [
		{
			id: 1,
			country: "Algeria",
			color: "#DBDD74",
			visited: true
		},
		{
			id: 2,
			country: "Angola",
			color: "#FFAE74",
			visited: false
		},
		{
			id: 3,
			country: "Benin",
			color: "#e92277",
			visited: true
		},
		{
			id: 4,
			country: "Botswanna",
			color: "#DBDD74",
			visited: false
		},
		{
			id: 5,
			country: "Burkina Faso",
			color: "#74D7DD",
			visited: true
		},
		{
			id: 6,
			country: "Cameroon",
			color: "#9267ED",
			visited: true
		},
		{
			id: 7,
			country: "Algeria",
			color: "#DBDD74",
			visited: true
		},
		{
			id: 8,
			country: "Angola",
			color: "#FFAE74",
			visited: false
		},
		{
			id: 9,
			country: "Benin",
			color: "#e92277",
			visited: true
		},
		{
			id: 10,
			country: "Botswanna",
			color: "#DBDD74",
			visited: false
		},
		{
			id: 11,
			country: "Burkina Faso",
			color: "#74D7DD",
			visited: true
		},
		{
			id: 12,
			country: "Cameroon",
			color: "#9267ED",
			visited: true
		},
	]

	const myRef = useRef("container-item-artist-visited");

	useEffect(() => {
		if(!open){
			setTimeout(() => {
				myRef.current = "container-item-artist-visited slideIn";
			}, 300);
		}else{
			setTimeout(() => {
				myRef.current = "container-item-artist-visited";
			}, 300);
		}

	});

  return (
			
			<div ref={myRef} className={myRef.current}>

				{contryVisited.map(item => (

						<div className="item-artist-visited" key={item.id}>
							<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill={ item.visited ? item.color : '#3E3E3E' } fillRule="evenodd" clipRule="evenodd" d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM35.9997 45.7076C41.3612 45.7076 45.7076 41.3612 45.7076 35.9997C45.7076 30.6382 41.3612 26.2919 35.9997 26.2919C30.6382 26.2919 26.2919 30.6382 26.2919 35.9997C26.2919 41.3612 30.6382 45.7076 35.9997 45.7076Z"/>
							</svg>
							<p style={{ color: item.visited ? '#FFFFFF' : '#545454' }}>{item.country}</p>
						</div>

					))}

			</div>
			
	)
}

export default ArtistVisited;