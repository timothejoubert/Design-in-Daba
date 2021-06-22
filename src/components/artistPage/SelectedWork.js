import React from "react"
import HorizontalScroll from "./HorizontalScroll"
import './SelectedWork.css';

//import locomotiveScroll from "locomotive-scroll";
//import { useHorizontalScroll } from "./useHorizontalScroll";
//import HorizontalScroll from 'react-scroll-horizontal'


function SelectedWork( { taglineSelected, artistGallery } ) {

  return (
	<article className="container-selected-work container">
			
		<div className="title-selected-work">
			<h3>Selected work</h3>
			<p>{taglineSelected}</p>
		</div>

		<HorizontalScroll artistGallery={artistGallery} />
	</article>
  )
}

export default SelectedWork;