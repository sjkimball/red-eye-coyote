import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const PostPreview = ({ primaryImgData, title, slug}) => (
	<div className="post-preview">
		<Link to={`/blog/`}>
				<Img fluid={primaryImgData} alt={`something`} />
		</Link>
		<h2>
			<Link to={`/${slug}/`}>{title}</Link>
		</h2>
		<p>{title}</p>
		<p>
			<Link to={`/${slug}/`}>View this post &rarr;</Link>
		</p>
	</div>
)

export default PostPreview;
