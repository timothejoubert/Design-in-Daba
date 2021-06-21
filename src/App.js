import MainNav from './components/MainNav';
import ArtistPage from './components/artistPage/ArtistPage';
import './App.css';
import contriesData from './data.js';

function App() {

  let currentArtistPage = contriesData()[0];
  let countriesVisited = [];

  const getCountriesVisited = () => {
    contriesData().forEach( (items) => {
      const country = {
        name: items.country,
        main_color: items.main_color,
        colors_gradient: items.colors_gradient,
        visited: items.visited
      };
      countriesVisited.push(country);
    })
    return countriesVisited
  }


  return (
    <div className="container-global" style={{ backgroundColor: currentArtistPage.main_color }}>

      <MainNav data={getCountriesVisited()} currentArtistPage={currentArtistPage} />
      <ArtistPage artist={currentArtistPage} />

    </div>
  );

}

export default App;

