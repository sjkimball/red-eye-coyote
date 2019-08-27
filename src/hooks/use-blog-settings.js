import { graphql, useStaticQuery } from 'gatsby';

const useBlogSettings = () => {
	const data = useStaticQuery(graphql`
		{
			sanityBlogSettings {
			    title
			    subtitle
			    description
			    keywords
			    author {
			      id
			    }
			  }
			}
		`);
	return data.sanityBlogSettings;
};

export default useBlogSettings;