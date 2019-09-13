import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './post-preview.css';

const PostPreview = ({ mainImage, title, slug, subtitle}) => (
	<div className={`rec-container`}>
		<Link to={`/blog/${slug}`} className={`post-preview`}>
				<Img
					fluid={mainImage.file.asset.fluid}
					alt={mainImage.alt_text}
					sizes={{...mainImage.file.asset.fluid, aspectRatio: 16 / 9 }}
					className={`post-thumb`}
				/>
				<h2 className={`post-title`}>{title}</h2>
		</Link>
	</div>
)

export default PostPreview;
