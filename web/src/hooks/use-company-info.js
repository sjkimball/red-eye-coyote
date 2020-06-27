import { graphql, useStaticQuery } from 'gatsby';

const useCompanyInfo = () => {
	const data = useStaticQuery(graphql`
		query companyInfo {
      companyInfo: sanityCompanyInfo(_id: {regex: "/(drafts.|)companyInfo/"}) {
        socialAccounts {
          service {
            name
          }
          url
          username
        }
        companyName
        _rawAbout
      }
      staffCount: allSanityPerson {
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

	return data;
};

export default useCompanyInfo;
