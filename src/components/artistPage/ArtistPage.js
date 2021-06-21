import HomePage from '../HomePage';
import QuoteArtist from './QuoteArtist';
import ContentArtistPage from './ContentArtistPage';
import './ArtistPage.css';

function ArtistPage() {
  return (
	<main className="container-artistPage">
		<QuoteArtist/>
		<ContentArtistPage/>
		<HomePage />
	</main>

  );
}


export default ArtistPage;
