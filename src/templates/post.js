import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({ data }) => {
	const post = data.sanityPost;

	const author = post.author;
	const body = post._rawBody;
	const coverImage = post.coverImage;
	const keywords = post.keywords;
	const publishedAt = post.publishedAt;
	const title = post.title;
	const subtitle = post.subtitle;

	return (
		<Layout>
			<Post
				author={author}
				body={body}
				coverImage={coverImage}
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
	    coverImage {
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
	      first_name
	      last_name
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
