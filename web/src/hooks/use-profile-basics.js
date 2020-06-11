import { graphql, useStaticQuery } from 'gatsby';

const useProfileBasics = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityPerson(sort: {fields: name, order: ASC}) {
		    totalCount
		    edges {
		      node {
		      	_id
						profileImg {
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
		        name
		        office {
		          contactInfo {
		            address {
		              city
		            }
		          }
		        }
		        slug {
		          current
		        }
		      }
		    }
		  }
		}
	`);

	return data.allSanityPerson;
};

export default useProfileBasics;
