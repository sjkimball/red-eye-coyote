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
			      bannerImage {
			      	img_file {
			      		asset {
			      			fluid {
			      				...GatsbySanityImageFluid
			      			}
			      		}
			      	}
			      	alt_text
			      }
			    }
			  }
			}
		}
	`);
	return data.allSanityPost.edges;
};

export default useBlogPostBasics;
