import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Project from '../components/project';

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;

	const client_name = project.client.client_name;
	const contributers = project.contributers;
	const disciplines = project.disciplines;
	const coverImg = project.coverImg;
	const offices = project.office;
	const project_summary = project.project_summary;
	const project_desc = project._rawProjectDesc;
	const title = project.title;
	const sectors = project.sectors;
	const productImgs = project.productImgs;

	return (
		<Layout>
			<Project
				client_name = {client_name}
				contributers = {contributers}
				disciplines = {disciplines}
				coverImg={coverImg}
				offices={offices}
				proj_summary={project_summary}
				proj_desc={project_desc}
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
		  sectors {
		    title
		    _id
		  }
		  project_summary
		  _rawProjectDesc
		  coverImg {
		  	image {
		  		...projectImageData
		  	}
		  	alt_text
		  	caption
		  }
		  productImgs {
	  		image {
					...projectImageData
		  	    }
		  	alt_text
		  	caption
		  }		  
		  client {
		    client_name
		  }
		  office {
		  	contact_info {
			    address {
			    	city
			    }		  		
		  	}
		  }
		  disciplines {
		    title
		    _id
		  }
		  contributers {
		    first_name
		    last_name
		    _id
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
