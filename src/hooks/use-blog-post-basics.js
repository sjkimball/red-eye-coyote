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
		          file {
		            asset {
		              fluid {
		                ...GatsbySanityImageFluid
		              }
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
