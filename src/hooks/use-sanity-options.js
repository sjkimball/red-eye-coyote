import { graphql, useStaticQuery } from 'gatsby';

const useSanityOptions = () => {
	const { sitePlugin } = useStaticQuery(graphql`
			query SanityOptions{
				sitePlugin(name: {eq: "gatsby-source-sanity"}) {
			    pluginOptions {
			      projectId
			      dataset
			      token
			    }
			  }
			}
		`
	);
	return sitePlugin.pluginOptions;
};

export default useSanityOptions;