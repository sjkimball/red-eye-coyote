import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './post.css'

const serializers = {
	container: 'section',
	types: {
		customImage: props => (
			<figure className={`post-image`}>
				<PreviewImage imageAsset={props.node} />
				<figcaption>{props.node.caption}</figcaption>
			</figure>
		)
	}
}

const Post = ({ author, body, keywords, publishedAt, title, subtitle}) => {

	return (
		<article className={`blog-post`}>
			<header className={`blog-post__header`}>
				<h1 className={`post-title`}>
					{title}
				</h1>
				<time className={`post-time`} dateTime={publishedAt}>{publishedAt}</time>
				<h2 className={`post-subtitle`}>{subtitle}</h2>
			</header>
			<BlockContent
				blocks={body}
				serializers={serializers}
				className={`post-body`}
			/>
			<footer className={`post-footer`}>
				<Link to="/blog">&larr; back to all posts</Link>
			</footer>		
		</article>
	);
}


export default Post;
