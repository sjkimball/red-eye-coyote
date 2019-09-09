import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './preview.css';

const PostPreview = ({ primaryImgData, title, slug}) => (
	<div className={`rec-container`}>
		<Link to={`/blog/${slug}`} className={`post-preview`}>
				<Img
					fluid={primaryImgData.img_file.asset.fluid}
					alt={primaryImgData.alt_text}
					sizes={{...primaryImgData.img_file.asset.fluid, aspectRatio: 16 / 9 }}
					className={`post-thumb`}
				/>
				<h2 className={`post-title`}>{title}</h2>
		</Link>
	</div>
)

export default PostPreview;
