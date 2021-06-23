import React, { useState, useRef } from 'react';
import MainNav from './components/MainNav';
import ArtistPage from './components/artistPage/ArtistPage';
import './App.css';
import contriesData from './data.js';

function App() {

  let [allData, initData] = useState(contriesData);
  const transiContainer = useRef(null)

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
    <div className="container-global" style={{ backgroundColor:  currentPageData.main_color}} >

      <MainNav changeCountry={updateData} data={allData} newColor={newColorBg} />
      <ArtistPage artist={currentPageData} />

      <div ref={transiContainer} style={{ backgroundColor: newColorBg }} className={ activeTransi ? "transition-page-artist active-transi" : "transition-page-artist" } >
        <div  style={{ backgroundColor: newColorBg }} className="inside-container-transi"></div>
      </div>
    </div>
  );

}

export default App;

