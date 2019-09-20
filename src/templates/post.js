import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({ data }) => {
	const post = data.sanityPost;

	const author = post.author;
	const body = post._rawBody;
	const keywords = post.keywords;
	const publishedAt = post.publishedAt;
	const title = post.title;
	const subtitle = post.subtitle;

	return (
		<Layout>
			<Post
				author={author}
				body={body}
				keywords={keywords}
				publishedAt={publishedAt}
				title={title}
				subtitle={subtitle}
			/>
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
	  sanityPost(slug: {current: {eq: $slug}}) {
	    slug {
	      current
	    }
	    title
	    subtitle
	    _id
	    author {
	      name
	    }
	    publishedAt
	    keywords
			_rawBody
	  }
	}
`;

export default PostTemplate;
