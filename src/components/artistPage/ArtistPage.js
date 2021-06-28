import HomePage from '../HomePage';
import QuoteArtist from './QuoteArtist';
import ContentArtistPage from './ContentArtistPage';
import './ArtistPage.css';

function ArtistPage( { artist, keepTopDistance }) {

  return (
	<main className="container-artistPage" style={ keepTopDistance ? {top: -keepTopDistance } : null}>
		<QuoteArtist artistInfo={artist}/>
		<ContentArtistPage artistContent={artist}/>
		<HomePage />
	</main>

  );
}


export default ArtistPage;
