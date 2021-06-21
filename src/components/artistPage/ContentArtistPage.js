import ArtistBanner from "./ArtistBanner";
import SelectedWork from "./SelectedWork";
import MoreText from "./MoreText";

import './ContentArtistPage.css';


function ContentArtistPage() {

  return (
		<section className="container-content-artist">
			<ArtistBanner />
			<SelectedWork />
			<MoreText />
		</section>
  );
}

export default ContentArtistPage;
