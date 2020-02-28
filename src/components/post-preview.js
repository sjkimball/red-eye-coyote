import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './post-preview.css';

const PostPreview = ({ post }) => {
	const { coverImg, publishedAt, title, slug, subtitle } = post;
	return(
		<Link to={`/blog/${slug.current}`} className={`post-preview`}>
				{<PreviewImage imageAsset={coverImg} />}
				<div className="post-preview__info">
					<h2 className={`post-preview__title`}>{title}</h2>
					<time className={`post-preview__time`} dateTime={publishedAt}>{publishedAt}</time>
					<h4 className={`post-preview__subtitle`}>{subtitle}</h4>
				</div>
		</Link>
	);
}

export default PostPreview;
