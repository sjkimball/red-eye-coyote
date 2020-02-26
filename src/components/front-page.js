import React from 'react'

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './front-page.css'

const FrontPage = ({pageContent}) => {

	// const heading = pageContent.heading;
	// const subheading = pageContent.subheading;
	const heroImage = pageContent.heroImage;
	const workSamples = pageContent.workSamples;

	return (
		<article className="rec-page">
			{/*<h1>{heading}</h1>
			<h2>{subheading}</h2>*/}
			<figure className={`hero-image`}>
				<PreviewImage imageAsset={heroImage} />
				<figcaption>{pageContent.heroImage.caption}</figcaption>
			</figure>
			<section className="work-samples">
				{workSamples.map((sample) => {
					const key = sample._id;
					const title = sample.title;
					const coverImg = sample.coverImg;
					const clientSlug = sample.client.slug.current;
					const slug = sample.slug.current;

					return (
						<Link key={key}to={`/work/${clientSlug}/${slug}`}>
							<PreviewImage imageAsset={coverImg} />
							<h5>
								{title}
							</h5>
						</Link>
					)
				})}
			</section>
		</article>
	)
}

export default FrontPage;
