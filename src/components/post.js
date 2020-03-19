import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import CoverImage from '../components/cover-image';
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
		<article id={`rec-post`} className={`blog-post`}>
			<header className={`blog-post__header`}>
				<h1 className={`blog-post__title`}>
					{title}
				</h1>
				<ul className="blog-post__keywords">
					{keywords.map((keyword, index) => {
						return (
								<li key={index}>{keyword}</li>
							)
					})}
				</ul>
				<time className={`blog-post__time`} dateTime={publishedAt}>{publishedAt}</time>
				<h2 className={`blog-post__summary`}>{subtitle}</h2>
				<p>{`${author.firstName} ${author.lastName}`}</p>
			</header>
			<CoverImage imageAsset={coverImg} />
			<BlockContent	className={`blog-post__body`}
				blocks={_rawBody}
				serializers={serializers}
			/>
			<footer className={`blog-post__footer`}>
				<Link to="/blog">&larr; back to all posts</Link>
			</footer>
		</article>
	);
}

export default Post;
