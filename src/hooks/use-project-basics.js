import { graphql, useStaticQuery } from 'gatsby';

const useProjectBasics = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityProject {
		    edges {
		      node {
		        _id
		        title
		        slug {
		        	current
		        }
		        coverImg {
		          alt_text
		          caption
		          img_file {
		            asset {
		              fluid {
		                ...GatsbySanityImageFluid
		              }
		            }
		          }
		        }
		        client {
		          client_name
		          slug {
		            current
		          }
		        }
		      }
		    }
		  }
		}
	`);

	return data.allSanityProject.edges;
};

export default useProjectBasics;