import ArtistBanner from "./ArtistBanner";
import SelectedWork from "./SelectedWork";
import MoreText from "./MoreText";

import './ContentArtistPage.css';


function ContentArtistPage( { artistContent } ) {


  return (
		<section className="container-content-artist">

			<ArtistBanner artistContent={artistContent} />
			<SelectedWork taglineSelected={artistContent.selected_work_tagline} artistGallery={artistContent.content}/>
			<MoreText contentMoreText={artistContent.more_text_content} />
			
			<article className="keep-exploring">
				<h3>Keep on exploring</h3>
			</article>
			
		</section>
  );
}

export default ContentArtistPage;
