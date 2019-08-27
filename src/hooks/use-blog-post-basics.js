import { graphql, useStaticQuery } from 'gatsby';

const useBlogPostBasics = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityPost {
			  edges {
			    node {
			      title
			      _rawBody
			      _id
			      slug {
			      	current
			      }
			      mainImage {
			      	asset {
			      		fluid {
			      			...GatsbySanityImageFluid
			      		}
			      	}
			      }
			    }
			  }
			}
		}
	`);
	return data.allSanityPost.edges;
};

export default useBlogPostBasics;
