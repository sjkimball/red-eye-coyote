import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Project from '../components/project';

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;

	const clientName = project.client.clientName;
	const contributors = project.contributors;
	const disciplines = project.disciplines;
	const coverImg = project.coverImg;
	const offices = project.office;
	const projectSummary = project.projectSummary;
	const projectDesc = project._rawProjectDesc;
	const title = project.title;
	const sectors = project.sectors;
	const productImgs = project.productImgs;


	return (
		<Layout>
			<Project
				clientName = {clientName}
				contributors = {contributors}
				disciplines = {disciplines}
				coverImg={coverImg}
				offices={offices}
				projectSummary={projectSummary}
				projectDesc={projectDesc}
				title={title}
				sectors={sectors}
				productImgs={productImgs}
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
