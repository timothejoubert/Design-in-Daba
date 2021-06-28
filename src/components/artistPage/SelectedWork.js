import React from "react";
// import HorizontalScroll from "./HorizontalScroll";
import GalleryImg from "./GalleryImg";

import './SelectedWork.css';



const SelectedWork = ({ contentMoreText, artistGallery }) => (
  <>
  <article className="container-selected-work">
    <div className="container-titre-section">
          <h2>Selected work</h2>
    </div>

      {/* <div className="container-horizontal-section">
        <HorizontalScroll artistGallery={artistGallery}/>
      </div> */}

	  <div className="container-vertical-section">
        <GalleryImg artistGallery={artistGallery}/>
      </div>
	  
	</article>

	<article className="container-more-text">
		<div className="container-titre-section">
			<h2>A few more text</h2>
		</div>
	  	<div className="content-more-text">
			{contentMoreText.map( (txt, index) => (
				<p key={index}>{txt}</p>
			))}
		</div>
	</article>

  </>
);


export default SelectedWork;