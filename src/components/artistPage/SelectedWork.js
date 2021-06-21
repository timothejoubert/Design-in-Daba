import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import './SelectedWork.css';


//import { useHorizontalScroll } from "./useHorizontalScroll";
//import HorizontalScroll from 'react-scroll-horizontal'


function SelectedWork() {

	const scrollRef = React.createRef();
	
	useEffect(() => {
		const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			repeat: true
		});
		//console.log(scroll);
	});

	const galleryImg = [
		{
			id: 1,
			img: "img-banner-2.png",
			txt: "description de l'image",
		},
		{
			id: 2,
			img: "img-banner-3.jpg",
			txt: "description de l'image",
		},		
		{
			id: 3,
			img: "img-banner-4.jpg",
			txt: "description de l'image",
		},		
		{
			id: 4,
			img: "img-banner-5.png",
			txt: "description de l'image",
		},		
		{
			id: 5,
			img: "img-banner-6.jpg",
			txt: "description de l'image",
		},		
		{
			id: 6,
			img: "img-banner-7.png",
			txt: "description de l'image",
		}
	];

  return (
	<article className="container-selected-work container" ref={scrollRef}>
			
		<div className="title-selected-work">
			<h3>Selected work</h3>
			<p>The portraits are a collaboration with Finnish visual artist Riiko Sakkinen, who visited Benin last year.</p>
		</div>
		
		<div className="content-selected-work" >
				{galleryImg.map(src => (
					<div 
					className="container-block-img" 
					key={src.id}
					data-scroll
					data-scroll-speed={4}
					data-scroll-direction="horizontal"
		  			>
					<img
						className="container-img-selected-work"
						src={`${process.env.PUBLIC_URL}` + src.img}
						alt={src.id}
					/>
					<p>{src.txt}</p>
					</div>
				))}
		</div>
		
	</article>
  )
}

export default SelectedWork;