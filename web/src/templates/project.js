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
				...projectImageData
		  }
		  productImgs {
				...projectImageData
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
	fragment projectImageData on SanityFigure {
		asset {
		  _id
		  metadata {
		  	lqip
		  }
		}
		altText
		caption
		hotspot {
		  x
		  y
		  height
		  width
		}
		crop {
		  top
		  bottom
		  left
		  right
		}
	}
`;

export default ProjectTemplate;
