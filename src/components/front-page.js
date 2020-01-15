import React from 'react'

import { Link } from 'gatsby';

import useSanityOptions from "../hooks/use-sanity-options";

import imageUrlBuilder from '@sanity/image-url'

import './front-page.css'

const FrontPage = ({pageContent}) => {
	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	const heading = pageContent.heading;
	const subheading = pageContent.subheading;
	const heroImage = pageContent.heroImage;
	const workSamples = pageContent.workSamples;

	return (
		<article className="rec-page">
			<h1>{heading}</h1>
			<h2>{subheading}</h2>
			<figure className={`hero-image`}>
				<img
					src={urlFor(heroImage.image).width(500).height(281).url()}
					alt={heroImage.alt_text}
				/>
				<figcaption>{pageContent.heroImage.caption}</figcaption>
			</figure>
			<section className="work-samples">
				<h4>Sample Work</h4>
				{workSamples.map((sample) => {
					const key = sample._id;
					const title = sample.title;
					const coverImg = sample.coverImg;
					const clientSlug = sample.client.slug.current;
					const slug = sample.slug.current;

					return (
						<Link key={key}to={`/work/${clientSlug}/${slug}`}>
							<img
								src={urlFor(coverImg.image).width(200).height(200).url()}
								alt={coverImg.alt_text}
								className={`thumb-image`}/>							
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