import React, { useRef } from "react";
import './SelectedWork.css';

//import locomotiveScroll from "locomotive-scroll";
//import { useHorizontalScroll } from "./useHorizontalScroll";
//import HorizontalScroll from 'react-scroll-horizontal'


function SelectedWork( { taglineSelected, artistGallery } ) {

	const scrollRef = useRef();

	// useEffect(() => {
	// 	new locomotiveScroll({
	// 		el: scrollRef.current,
	// 		smooth: true,
	// 		repeat: true
	// 	});
	// });

  return (
	<article className="container-selected-work container" ref={scrollRef}>
			
		<div className="title-selected-work">
			<h3>Selected work</h3>
			<p>{taglineSelected}</p>
		</div>
		
		<div className="content-selected-work" >
				{artistGallery.map( (src, index) => (
					<div 
					className="container-block-img" 
					key={index}
					data-scroll
					data-scroll-speed={4}
					data-scroll-direction="horizontal"
		  			>
					<img
						className="container-img-selected-work"
						src={`${process.env.PUBLIC_URL}` + src.img}
						alt={src.txt}
					/>
					<p>{src.txt}</p>
					</div>
				))}
		</div>
		
	</article>
  )
}

export default SelectedWork;