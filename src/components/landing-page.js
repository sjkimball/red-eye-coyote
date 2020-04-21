import React from 'react'

import { Link } from 'gatsby';

import CoverImage from '../components/cover-image';
import PreviewImage from '../components/preview-image';

import './landing-page.css'

const LandingPage = ({ pageContent }) => {
	const { heroImage, workSamples } = pageContent;

	return (
		<article className={`landing`}>
			<section className="featured">
				<header id={`landingHeader`} className={`landing-header`}>
					<CoverImage id={`hero`} imageAsset={heroImage} showCaption={true}/>
				</header>
			</section>
			<section>
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
			</section>
		</article>
	)
}

export default LandingPage;
