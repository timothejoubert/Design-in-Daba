
function ArtistBanner( {artistContent} ) {

	//console.log(artistContent);

	const descrObj = {
		__html: artistContent.description.replace(/(?:\r\n|\r|\n)/g, "<br>"),
	  };

  return (
		<article className="container-banner">
			<div className="container-img-banner">
				<img src={process.env.PUBLIC_URL + artistContent.banner_img} alt=""/>
			</div>
			<div className="container-text-banner">
				<h3>The artist</h3>
				<p dangerouslySetInnerHTML={descrObj}></p>
			</div>
		</article>
	)
}

export default ArtistBanner;