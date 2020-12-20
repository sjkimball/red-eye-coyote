import { graphql, useStaticQuery } from 'gatsby';

const useProjectBasics = () => {
	const data = useStaticQuery(graphql`
		query visibleProjects {
			projects: allSanityProject(filter: {visibility: {eq: true}}, sort: {fields: featured, order: DESC}) {
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
		        }
		      }
		    }
		  }
		}
	`);

	return data.projects.edges;
};

export default useProjectBasics;
