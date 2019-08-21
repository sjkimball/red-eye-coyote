import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
	query ($slug: String) {
		sanityProject(slug: { current: {eq: $slug}}) {
	    title
	    project_desc
	    mainImage {
	      asset {
	        fluid {
	          ...GatsbySanityImageFluid
	        }
	      }
	    }
	  }
	}
`;

const ProjectTemplate =({ data }) => {
	const project = data.sanityProject;
	const title = project.title;
	const project_desc = project.project_desc;
	const imageData = project.mainImage.asset.fluid;
	// const url = project.url;

	return (
		<Layout>
			<Project 
				title={title}
				description={project_desc}
				imageData={imageData}
				/*url={url}*/
			/>				
		</Layout>
	);
};

export default ProjectTemplate;
