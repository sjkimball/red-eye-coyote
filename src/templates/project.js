import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import Project from '../components/project';

// export const query = graphql`
// 	query ($slug: String) {
// 		sanityProject(slug: { current: {eq: $slug}}) {
// 	    title
// 	    project_summary
// 	    mainImage {
// 	    	media {
// 	    		asset {
// 	    			fluid {
// 	    				...GatsbySanityImageFluid
// 	    			}
// 	    		}
// 	    	}
// 	    }  
// 	  }
// 	}
// `;

const ProjectTemplate =({ data }) => {
	// const project = data.sanityProject;
	// const title = project.title;
	// const project_summary = project.project_summary;
	// const imageData = project.mainImage.media.asset.fluid;
	// const url = project.url;

	return (
		<Layout>
			{/*<Project 
										title={title}
										description={project_summary}
										imageData={imageData}
										url={url}
									/>	*/}			
		</Layout>
	);
};

export default ProjectTemplate;
