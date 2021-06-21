import './MoreText.css';


function MoreText( { contentMoreText }) {

  return (
	<article className="container-more-text">
		<h3>A few more text</h3>

		<div className="content-more-text">
			{contentMoreText.map( (txt, index) => (
				<p key={index}>{txt}</p>
			))}
		</div>

		</article>
  )
}

export default MoreText;