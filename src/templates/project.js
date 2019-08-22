import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;
	const title = project.title;
	const project_summary = project.project_summary;
	const imageData = project.primaryImg.asset;
	// const url = project.url;

	return (
		<Layout>
			<Project
				title={title}
				description={project_summary}
				imageData={imageData}
			/>
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String) {
		sanityProject(slug: {current: {eq: $slug}}) {
			title
			sectors {
				title
			}
			project_summary
			primaryImg {
				asset {
					fluid {
						src
					}
				}
			}
			primaryImg_alt
		}
	}
`;

export default ProjectTemplate;
