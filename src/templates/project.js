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
		  sectors
		  projectSummary
		  _rawProjectDesc
		  coverImg {
		  	image {
		  		...projectImageData
		  	}
		  	altText
		  	caption
		  }
		  productImgs {
	  		image {
					...projectImageData
		  	    }
		  	altText
		  	caption
		  }
		  client {
		    clientName
		  }
		  office {
		  	contactInfo {
			    address {
			    	city
			    }
		  	}
		  }
		  disciplines
		  contributors {
		  	name {
			    firstName
			    lastName
		  	}
		  	_key
		  }
		}
	}
	fragment projectImageData on SanityImage {
		asset {
		  _id
		}
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
