import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './post-preview.css';

const PostPreview = ({ mainImage, publishedAt, title, slug, subtitle }) => (
	<div className={`preview-wrapper`}>
		<Link to={`/blog/${slug}`} className={`post-preview`}>
				<Img
					fluid={mainImage.file.asset.fluid}
					alt={mainImage.alt_text}
					sizes={{...mainImage.file.asset.fluid, aspectRatio: 16 / 9 }}
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
)

export default PostPreview;
