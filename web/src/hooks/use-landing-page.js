import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
	const data = useStaticQuery(graphql`
    query LandingPage {
      page: sanityPage(_id: {regex: "/(drafts.|)frontpage/"}) {
        heading
        subheading
        content {
          ... on SanityFigure {
            _key
            _type
            ...imageData
          }          
        }
      }
    }
	`);

	return data.page;
};

export default useLandingPage;
