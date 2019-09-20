import React from 'react'

import Img from 'gatsby-image';

import './front-page.css'

const FrontPage = ({pageContent}) => {
	const heading = pageContent.heading;
	const subheading = pageContent.subheading;
	const heroImage = pageContent.heroImage.file.asset.fluid;
	const workSamples = pageContent.workSamples;

	return (
		<article className="rec-page">
			<h1>{heading}</h1>
			<h2>{subheading}</h2>
			<figure>
				<Img
					fluid={heroImage}
					alt={pageContent.heroImage.alt_text}
					sizes={{...heroImage, aspectRatio: 16 / 9}}
					className={`hero-image`}
				/>
				<figcaption>{pageContent.heroImage.caption}</figcaption>
			</figure>
			<section className="work-samples">
				<h4>Sample Work</h4>
				{workSamples.map((sample) => {
					const key = sample._id;
					const title = sample.title;
					const coverImg = sample.coverImg.file.asset.fluid;

					return (
						<div key={key} className={`sample-thumb`}>
							<img src={coverImg.src} alt={coverImg.alt_text} className={`thumb-image`}/>							
							<h5>
								{title}
							</h5>
						</div>
					)
				})}
			</section>
		</article>
	)
}

export default FrontPage;