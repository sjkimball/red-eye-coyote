import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
	const data = useStaticQuery(graphql`
    query LandingPage {
      page: sanityPage(_id: {regex: "/(drafts.|)frontpage/"}) {
        heading
        subheading
        content {
          ... on SanityHero {
            _key
            _type
            heroImage {
              ...imageData
            }
            disabled
          }
          ... on SanityFeaturedProjects {
            _key
            _type
            projects {
              coverImg {
                ...imageData
              }
              slug {
                current
              }
              client {
                name
                slug {
                  current
                }
              }
            }
            disabled
          }
          ... on SanityFeaturedPosts {
            _key
            _type
            posts {
              title
              coverImg {
                ...imageData
              }
              publishedAt
              slug {
                current
              }
              subtitle
            }
            disabled
          }
          ... on SanityFeaturedPeople {
            _key
            _type
            people {
              name
              profileImg {
                ...imageData
              }
              slug {
                current
              }
              office{
                contactInfo {
                  address {
                    city
                  }
                }
              }
            }
            disabled
          }
        }
      }
    }
	`);

	return data.page;
};

export default useLandingPage;
