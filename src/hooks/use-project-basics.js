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
		          file {
		          	_type
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
		            asset {
		            	_id
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