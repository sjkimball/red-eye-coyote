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
							altText
							caption
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

	return data.allSanityProject.edges;
};

export default useProjectBasics;
