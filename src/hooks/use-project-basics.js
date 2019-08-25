import { graphql, useStaticQuery } from 'gatsby';

const useProjectBasics = () => {
	const data = useStaticQuery(graphql`
		{
		  allSanityProject {
		    edges {
		      node {
		      	_id
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
		          slug {
		          	current
		          }
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