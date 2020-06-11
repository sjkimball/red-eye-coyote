import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({ data }) => {
	const post = data.sanityPost;

	return (
		<Layout>
			<Post post={post} />
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
	  sanityPost(slug: {current: {eq: $slug}}) {
	    coverImg {
				...postImageData
	    }
	    slug {
	      current
	    }
	    title
	    subtitle
	    _id
	    authors {
	      name
	    }
	    publishedAt
	    keywords
			_rawBody(resolveReferences: {maxDepth: 10})
		}
  }
	fragment postImageData on SanityFigure {
		asset {
		  _id
		  metadata {
		  	lqip
		  }
		}
		altText
		caption
		hotspot {
		  x
		  y
		  height
		  width
		}
		crop {
		  top
		  bottom
		  left
		  right
		}
	}
`;

export default PostTemplate;
