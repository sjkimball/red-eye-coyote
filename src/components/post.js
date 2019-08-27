import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

const Post = ({ author, body, imageData, publishedAt, title}) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<div className="blog-post">
			<article>
				<header className="blog-header">
					<h1>
						{title}
					</h1>
					<Img fluid={imageData} alt='something' />
				</header>
				<BlockContent blocks={body} serializers={serializers} className={"blog-post-body"}/>
				<aside className="project-assets">
					Project Gallery
					<p>Image 1</p>
					<p>Image 2</p>
					<p>Image 3</p>
				</aside>
				<p>
					<Link to="/blog">&larr; back to all posts</Link>
				</p>		
			</article>
		</div>
	);
}


export default Post;
