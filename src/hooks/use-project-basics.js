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
		          altText
		          caption
		          image {
		          	asset {
		          		_id
		          		metadata {
		          			lqip
		          		}
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
		          clientName
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
