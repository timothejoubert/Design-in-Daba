import React, { useRef, useEffect } from "react";
import Macy from "macy";
import './GalleryImg.css';


const GalleryImg = ({ artistGallery }) => {

  const containerMacy = useRef();

  const SampleCards = ({artistGallery}) => 
    artistGallery.map((obj, i) => ( 
      <div className="container-card" key={`sampleCard-${i}`}>
        <img src={artistGallery[i].img} className="img-gallery" alt={artistGallery[i].txt}/>
        {/* <p>{artistGallery[i].txt}</p> */}
      </div>
    )
  );

  useEffect(() => {
    if(containerMacy){
      Macy({
        container: containerMacy.current,
        waitForImages: true,
        margin: 20,
        columns: 4,
        breakAt: {
            1200: 3,
            940: 2,
            520: 2,
            400: 1
        }
      });
    }
  })


  return (
      <div className="gallery-container" >
        <div className="container-cards" ref={containerMacy}>
          <SampleCards artistGallery={artistGallery} />
        </div>
      </div>
  );
};

export default GalleryImg;