import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const PostPreview = ({ primaryImgData, title, slug}) => (
	<div className="post-preview">
		<Link to={`/blog/${slug}`}>
				<Img fluid={primaryImgData} alt={`something`} sizes={{...primaryImgData, aspectRatio: 16 / 9 }}/>
		</Link>
		<h2>
			<Link to={`/blog/${slug}/`}>{title}</Link>
		</h2>
		<p>{title}</p>
		<p>
			<Link to={`/blog/${slug}/`}>View this post &rarr;</Link>
		</p>
	</div>
)

export default PostPreview;
