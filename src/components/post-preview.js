import React from 'react';

import { Link } from 'gatsby';

import useSanityOptions from "../hooks/use-sanity-options";

import imageUrlBuilder from '@sanity/image-url'

import './post-preview.css';

const PostPreview = ({ mainImage, publishedAt, title, slug, subtitle }) => {
	console.log(mainImage);

	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	return(
		<div className={`preview-wrapper`}>
			<Link to={`/blog/${slug}`} className={`post-preview`}>
					<img
						src={urlFor(mainImage.image).width(500).height(281).url()}
						alt={mainImage.alt_text}
						className={`post-thumb`}
					/>
					<div className="post-info">
						<h2 className={`post-title`}>{title}</h2>
						<h4 className={`post-subtitle`}>
							<time className={`post-time`} dateTime={publishedAt}>{publishedAt}</time>
							{subtitle}
						</h4>
					</div>
			</Link>
		</div>
	);
}

export default PostPreview;
