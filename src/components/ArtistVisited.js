import React, { useEffect, useState } from 'react';
import './ArtistVisited.css';


function ArtistVisited( { open, data, changeCountry }) {
	const [newData, initData] = useState(data);

	useEffect( () => {
		initData(data);
	});

  return (
		<div className={!open ? "container-item-artist-visited" : "container-item-artist-visited slideIn"}>
			{newData.length > 2 && newData.map( (item, index) => (
				<div onClick={() => changeCountry(index)} className={!open ? "item-artist-visited " : "item-artist-visited grow"} key={index} style={{ transitionDelay : index * 20 + 150 + 'ms'}}>
					<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill={ item.visited ? item.main_color : '#3E3E3E' } fillRule="evenodd" clipRule="evenodd" d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM35.9997 45.7076C41.3612 45.7076 45.7076 41.3612 45.7076 35.9997C45.7076 30.6382 41.3612 26.2919 35.9997 26.2919C30.6382 26.2919 26.2919 30.6382 26.2919 35.9997C26.2919 41.3612 30.6382 45.7076 35.9997 45.7076Z"/>
						<circle cx="36.0039" cy="36.0015" r="10" fill="black"/>
					</svg>
					<p style={{ color: item.visited ? '#FFFFFF' : '#545454' }}>{item.country}</p>
				</div>
			))}
		</div>	
	)
}

export default ArtistVisited;