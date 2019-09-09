import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({ data }) => {
	const post = data.sanityPost;

	const author = post.author;
	const body = post._rawBody;
	const imageData = post.bannerImage;
	const keywords = post.keywords;
	const publishedAt = post.publishedAt;
	const title = post.title;

	return (
		<Layout>
			<Post
				author={author}
				body={body}
				imageData={imageData}
				keywords={keywords}
				publishedAt={publishedAt}
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
	    bannerImage {
	    	img_file {
		      asset {
		        fluid {
		          ...GatsbySanityImageFluid
		        }
		      }	    		
	    	}
	    	alt_text
	    	caption
	    }
	    publishedAt
	    keywords
			_rawBody
	  }
	}
`;

export default PostTemplate;
