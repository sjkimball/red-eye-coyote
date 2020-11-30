import { graphql, useStaticQuery } from 'gatsby';

const useProfileBasics = () => {
	const data = useStaticQuery(graphql`
		query featuredStaff {
			people: allSanityPerson(filter: {featured: {eq: true}}) {
				edges {
					node {
						_id
						profileImg {
							...imageData
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

	return data.people.edges;
};

export default useProfileBasics;
