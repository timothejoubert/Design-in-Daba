import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import './QuoteArtist.css';


function QuoteArtist() {
	document.onreadystatechange = function () {
		if (document.readyState === "complete") {
			Splitting({ target: "[data-splitting]", by: 'words' });
		}
	  }

	return (
	<section className="container-heading">
		<article className="container-quote">
			<blockquote data-splitting>“No color is more joyfull than yellow. The color of sun, celebration and joy. Yellow is associated with power, the power embodied by the african woman.”</blockquote>
			<cite className="Artist-name">Louis Houenoudel</cite>
			<p className="Artist-country">Benin</p>
		</article>
	</section>
  );
}


export default QuoteArtist;
