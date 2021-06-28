import React, { useState, useRef, useEffect } from 'react';
import MainNav from './components/MainNav';
import AboutPage from './components/AboutPage';
import ArtistPage from './components/artistPage/ArtistPage';
import './App.css';
import contriesData from './data.js';



function App() {

  let [allData, initData] = useState(contriesData);
  const transiContainer = useRef(null)

  //handleAbout page
  let [aboutOpen, setAboutOpen] = useState();
  let [scrollValue, setScrollValue] = useState([]);

  const handleAbout = (topScroll) => {
    setAboutOpen(aboutOpen =! aboutOpen);
    //close nav artist when about is open
    if(openArtistNav){
      setOpenArtistNav(false);
    }
    if(aboutOpen){
      setScrollValue([ ...scrollValue, topScroll ]);
      window.scrollTo(0, 0);
      console.log(scrollValue);
    }else{
      console.log(window.scrollY, "ferme", "last value in array", scrollValue[scrollValue.length - 1]);
      setTimeout(function(){ window.scrollTo(0, scrollValue[scrollValue.length - 1]); }, 0);
      //fixedContainer.style.top(-scrollValue[scrollValue.length - 1]);
    }
  }

  //handle Artist nav 
  let [openArtistNav, setOpenArtistNav] = useState();
  const handleArtistNav = () => {
    setOpenArtistNav(openArtistNav =! openArtistNav);
  }

  useEffect(() => {
    setAboutOpen(false);
    setOpenArtistNav(false);
  }, [setOpenArtistNav, setAboutOpen] )

  // const getCountriesVisited = () => {
  //   let mainInfo = [];
  //   allData.forEach( (items) => {
  //     const country = {
  //       name: items.country,
  //       main_color: items.main_color,
  //       colors_gradient: items.colors_gradient,
  //       visited: items.visited
  //     };
  //     mainInfo.push(country);
  //   })
  //   return mainInfo
  // }

  //let [mainData, initMainData] = useState(getCountriesVisited);
  let [currentPageData, initCurrentData] = useState(allData[0]);
  let [activeTransi, setActiveTransi] = useState(false);
  let [newColorBg, setNewColorBG] = useState(allData[0].main_color);


  const updateData = (index) => {
    allData[index].visited = true;
    setAboutOpen(false);
    setOpenArtistNav(false);

    setNewColorBG(allData[index].main_color);
    setActiveTransi(true);

    //wait animation transi to update data
    setTimeout(() => {
      initCurrentData(allData[index]);
      initData(allData);
      window.scrollTo(0, 0);
    }, 750);

    //remove class transition
    setTimeout(() => {
      setActiveTransi(false);
    }, 1500);

  }

  return (
    <div className={aboutOpen ? "container-global about-open" : "container-global"} style={{ backgroundColor:  currentPageData.main_color}} >

      <MainNav changeCountry={updateData} data={allData} newColor={newColorBg} handleAbout={handleAbout} aboutOpenBool={aboutOpen} handleArtistNav={handleArtistNav} ArtistNavBool={openArtistNav}/>
      <ArtistPage artist={currentPageData} keepTopDistance={ aboutOpen ? scrollValue[scrollValue.length - 1] : null }/>

      { aboutOpen  && 
        <AboutPage /> 
      }

      <div ref={transiContainer} style={{ backgroundColor: newColorBg }} className={ activeTransi ? "transition-page-artist active-transi" : "transition-page-artist" } >
        <div style={{ backgroundColor: newColorBg }} className="inside-container-transi"></div>
      </div>

    </div>
  );

}

export default App;

