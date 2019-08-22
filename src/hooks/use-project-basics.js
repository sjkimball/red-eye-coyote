import { graphql, useStaticQuery } from 'gatsby';

const useProjectBasics = () => {
	const data = useStaticQuery(graphql`
		{
		  allSanityProject {
		    edges {
		      node {
		        title
		        primaryImg {
		          asset {
		            fluid {
		              ...GatsbySanityImageFluid
		            }
		          }
		        }
		        client {
		          client_name
		        }
		        primaryImg_alt
		        slug {
		          current
		        }
		      }
		    }
		  }      
		}
		`);
	return data.allSanityProject.edges;
};

export default useProjectBasics;