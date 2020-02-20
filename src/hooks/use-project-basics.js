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