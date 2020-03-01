import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './post.css'

const serializers = {
	container: 'section',
	types: {
		customImage: props => (
				<PreviewImage imageAsset={props.node} showCaption={true} />
		)
	}
}

const Post = ({ post }) => {
	const {
		author,
		_rawBody,
		coverImg,
		keywords,
		publishedAt,
		title,
		subtitle
	} = post;

	return (
		<article className={`blog-post`}>
			<header className={`blog-post__header`}>
				<h1 className={`post-title`}>
					{title}
				</h1>
				<time className={`post-time`} dateTime={publishedAt}>{publishedAt}</time>
				<h2 className={`post-subtitle`}>{subtitle}</h2>
				<PreviewImage imageAsset={coverImg} />
			</header>
			<BlockContent
				blocks={_rawBody}
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
