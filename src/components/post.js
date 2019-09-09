import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import './post.css'

const Post = ({ author, body, imageData, keywords, publishedAt, title}) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	const img_file = imageData.img_file.asset.fluid;

	return (
		<div>
			<article className={`rec-post`}>
				<header className={`blog-header`}>
					<h1>
						{title}
					</h1>
					<Img fluid={img_file} alt={imageData.alt_text} sizes={{...img_file, aspectRatio: 4 / 3 }}/>
				</header>
				<BlockContent blocks={body} serializers={serializers} className={`post-body`}/>
				<aside className={`project-aside`}>
					Project Gallery
					<p>Image 1</p>
					<p>Image 2</p>
					<p>Image 3</p>
				</aside>
				<footer className={`post-footer`}>
					<Link to="/blog">&larr; back to all posts</Link>
				</footer>		
			</article>
		</div>
	);
}


export default Post;
