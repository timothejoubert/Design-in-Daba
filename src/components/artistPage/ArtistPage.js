import HomePage from '../HomePage';
import QuoteArtist from './QuoteArtist';
import ContentArtistPage from './ContentArtistPage';
import './ArtistPage.css';

function ArtistPage( { artist }) {


  return (
	<main className="container-artistPage">
		<QuoteArtist artistInfo={artist}/>
		<ContentArtistPage artistContent={artist}/>
		<HomePage />
	</main>

  );
}


export default ArtistPage;
