import React from 'react'

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './front-page.css'

const FrontPage = ({ pageContent }) => {
	// console.log(pageContent);
	// const { heading, subheading, heroImage, workSamples } = pageContent;
	const { heroImage, workSamples } = pageContent;

	return (
		<React.Fragment>
			{/*<h1>{heading}</h1>
			<h2>{subheading}</h2>*/}
			<figure className={`hero-image`}>
				<PreviewImage imageAsset={heroImage} />
				<figcaption>{heroImage.caption}</figcaption>
			</figure>
			<section className="work-samples preview-container">
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
					);
				})}
			</section>
		</React.Fragment>
	)
}

export default FrontPage;
