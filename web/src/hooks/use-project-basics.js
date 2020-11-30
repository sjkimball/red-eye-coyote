import { graphql, useStaticQuery } from 'gatsby';

const useProjectBasics = () => {
	const data = useStaticQuery(graphql`
		query featuredProjects {
			projects: allSanityProject(sort: {fields: featured, order: DESC}) {
		    edges {
		      node {
		        _id
		        title
		        slug {
		        	current
		        }
		        coverImg {
							...imageData
						}
		        client {
		          name
		          slug {
		            current
		          }
		        }
		      }
		    }
		  }
		}
	`);

	return data.projects.edges;
};

export default useProjectBasics;
