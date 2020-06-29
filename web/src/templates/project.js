import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Project from '../components/project';

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;

	return (
		<Layout>
			<Project
				project={project}
			/>
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
		sanityProject(slug: {current: {eq: $slug}}) {
		  title
		  sector
		  projectSummary
		  _rawProjectDesc(resolveReferences: {maxDepth: 10})
		  coverImg {
				...imageData
		  }
		  productImgs {
				...imageData
		  }
		  client {
		    name
		  }
		  office {
		  	contactInfo {
			    address {
			    	city
			    }
		  	}
		  }
		  disciplines
		  projectMembers {
		  	person {
					name
				}
		  	_key
		  }
		}
	}
`;

export default ProjectTemplate;
