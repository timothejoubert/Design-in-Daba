import React, { useState, useRef } from 'react';
import MainNav from './components/MainNav';
import ArtistPage from './components/artistPage/ArtistPage';
import './App.css';
import contriesData from './data.js';

function App() {

  let [allData, initData] = useState(contriesData);
  const transiContainer = useRef(null)

  const getCountriesVisited = () => {
    let mainInfo = [];
    allData.forEach( (items) => {
      const country = {
        name: items.country,
        main_color: items.main_color,
        colors_gradient: items.colors_gradient,
        visited: items.visited
      };
      mainInfo.push(country);
    })
    return mainInfo
  }

  //let [mainData, initMainData] = useState(getCountriesVisited);
  let [currentPageData, initCurrentData] = useState(allData[0]);
  let [activeTransi, setActiveTransi] = useState(false);


  const updateData = (index) => {
    allData[index].visited = true

    setTimeout(() => {
      setActiveTransi(true);
      initCurrentData(allData[index]);
    }, 100);

    setTimeout(() => {
      initData(allData);
    }, 500);

    setTimeout(() => {
      setActiveTransi(false);
    }, 2000);

  }

 

  return (
    <div className="container-global" style={{ backgroundColor: currentPageData.main_color }}>

      <MainNav changeCountry={updateData} data={allData} currentArtistPage={currentPageData} />
      <ArtistPage artist={currentPageData} />

      <div ref={transiContainer} style={{ backgroundColor: currentPageData.main_color }} className={ activeTransi ? "transition-page-artist active-transi" : "transition-page-artist" } ></div>
    </div>
  );

}

export default App;

