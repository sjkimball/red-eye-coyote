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
        }
      }
    }
    
    fragment imageData on SanityFigure {
      altText
      caption
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
    }
	`);

	return data.page;
};

export default useLandingPage;
