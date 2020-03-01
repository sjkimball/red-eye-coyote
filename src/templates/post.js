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
	    	image {
	    		...postImageData
	    	}
	    }
	    slug {
	      current
	    }
	    title
	    subtitle
	    _id
	    author {
	      firstName
	      lastName
	    }
	    publishedAt
	    keywords
			_rawBody
		}
  }
	fragment postImageData on SanityImage {
		asset {
		  _id
		}
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
