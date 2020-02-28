import { graphql, useStaticQuery } from 'gatsby';

const useProfileBasics = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityPerson(sort: {fields: lastName, order: ASC}) {
		    totalCount
		    edges {
		      node {
		      	_id
		        profileImg {
		          image {
		            asset {
		              _id
		            }
		          }
		        }
		        firstName
		        lastName
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
