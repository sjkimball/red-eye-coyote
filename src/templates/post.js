import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({ data }) => {
	const post = data.sanityPost;

	const author = post.author;
	// const imageAlt = post.primaryImg_alt;
	const imageData = post.mainImage.asset.fluid;
	// const publishedAt = post.publishedAt;
	const body = post._rawBody;
	const title = post.title;

	return (
		<Layout>
			<Post
				author = {author}
				// imageAlt={imageAlt}
				imageData={imageData}
				body={body}
				title={title}
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
	    _id
	    author {
	      name
	    }
	    mainImage {
	      asset {
	        fluid {
	          ...GatsbySanityImageFluid
	        }
	      }
	    }
	    publishedAt
			_rawBody
	  }
	}
`;

export default PostTemplate;
