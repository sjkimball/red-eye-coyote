import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({ data }) => {
	const post = data.post;

	return (
		<Layout>
			<Post post={post} />
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
	  post: sanityPost(slug: {current: {eq: $slug}}) {
			slug {
				current
			}
			authors {
				name
			}
			title
			subtitle
			publishedAt
			keywords
	    coverImg {
				...imageData
	    }
			_rawBody(resolveReferences: {maxDepth: 10})
		}
  }
`;

export default PostTemplate;
