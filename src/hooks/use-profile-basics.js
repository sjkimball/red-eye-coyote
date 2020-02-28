import { graphql, useStaticQuery } from 'gatsby';

const useProfileBasics = () => {
	const data = useStaticQuery(graphql`
		{
			allSanityPerson(sort: {fields: last_name, order: ASC}) {
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
		        first_name
		        last_name
		        office {
		          contact_info {
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
