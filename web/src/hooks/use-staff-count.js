import { graphql, useStaticQuery } from 'gatsby';

const useStaffCount = () => {
	const data = useStaticQuery(graphql`
		query staffCount {
				  allSanityPerson {
				    totalCount
						edges {
				      node {
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

export default useStaffCount;
