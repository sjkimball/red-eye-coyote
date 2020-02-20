import { graphql, useStaticQuery } from 'gatsby';

const useBlogPostBasics = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityPost {
		    edges {
		      node {
		      	_id
		        title
		        subtitle
		        publishedAt
		        mainImage {
		          image {
		            asset {
		              _id
		            }
		            crop {
		            	top
		            	bottom
		            	left
		            	right
		            }
		            hotspot {
		            	x
		            	y
		            	height
		            	width
		            }
		          }
		        }
		        slug {
		          current
		        }
		      }
		    }
		  }
		}
	`);
	return data.allSanityPost.edges;
};

export default useBlogPostBasics;
