import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;

	const client_name = project.client.client_name;
	const creators = project.creators.name;
	const disciplines = project.disciplines.title;
	const imageAlt = project.primaryImg_alt;
	const imageData = project.primaryImg.asset.fluid;
	const office = project.office.city;
	const project_summary = project.project_summary;
	const title = project.title;
	const sectors = project.sectors.title;

	return (
		<Layout>
			<Project
				client_name = {client_name}
				creators = {creators}
				disciplines = {disciplines}
				imageAlt={imageAlt}
				imageData={imageData}
				office={office}
				proj_summary={project_summary}
				title={title}
				sectors={sectors}
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
		        ...GatsbySanityImageFluid
		      }
		    }
		  }
		  primaryImg_alt
		  client {
		    client_name
		  }
		  office {
		    city
		  }
		  disciplines {
		    title
		  }
		  creators {
		    name
		  }
		}
	}
`;

export default ProjectTemplate;
