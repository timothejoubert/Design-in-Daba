import React, { useState, useEffect, useRef } from "react";
import './HorizontalScroll.css'


const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh ;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

const HorizontalScroll = ({ artistGallery }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  function handleImageLoaded() {
    resizeHandler();
  }
  

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  const SampleCards = ({artistGallery}) => 
    
    artistGallery.map((obj, i) => 
    ( 
      <div className="container-card" key={`sampleCard-${i}`}>
        <img src={artistGallery[i].img} className="img-gallery" onLoad={handleImageLoaded} alt={artistGallery[i].txt}/>
        <p>{artistGallery[i].txt}</p>
      </div>
    )
 
    );
  
  return (
    <div dynamiceight={dynamicHeight} style={{ height: `${dynamicHeight}px` }}>
      <div ref={containerRef} className="sticky-container">
        <div className="horizontal-scroll-container" translatex={translateX} ref={objectRef} style={{ transform: `translateX(${translateX}px)` }}>
          <div className="container-cards">
            <SampleCards artistGallery={artistGallery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;