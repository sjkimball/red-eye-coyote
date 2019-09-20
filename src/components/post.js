import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url'

import './post.css'

const client = {
	projectId: '6y7rlog8',
	dataset: 'production'
}

const urlFor = source =>
	urlBuilder({projectId: client.projectId, dataset: client.dataset}).image(source)

const serializers = {
	container: 'section',
	types: {
		primaryImage: props => (
			<figure>
				<img src={urlFor(props.node.file.asset)} alt={props.node.alt_text} />
				<figcaption>{props.node.caption}</figcaption>
			</figure>
		)
	}
}

const Post = ({ author, body, keywords, publishedAt, title, subtitle}) => {

	return (
		<article className={`rec-blog-post`}>
			<header className={`post-header`}>
				<h1 className={`post-title`}>
					{title}
				</h1>
				<time className={`post-time`} dateTime={publishedAt}>Date Published: {publishedAt}</time>
				<h2 className={`post-subtitle`}>{subtitle}</h2>
			</header>
			<BlockContent
				blocks={body}
				serializers={serializers}
				className={`post-body`}
				projectId={client.projectId}
				dataset={client.dataset}
			/>
			<footer className={`post-footer`}>
				<Link to="/blog">&larr; back to all posts</Link>
			</footer>		
		</article>
	);
}


export default Post;
