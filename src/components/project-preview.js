import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './project-preview.css';

const ProjectPreview = ({ clientName, clientSlug, primaryImgAlt, primaryImgData, title, slug}) => {

	return (
		<Link to={`/work/${clientSlug}/${slug}`} className={`project-preview`}>
			<Img
				fluid={primaryImgData.file.asset.fluid}
				alt={primaryImgData.alt_text}
				className={`project-thumb`}
				imgStyle={{objectPosition: '0 0'}}
			/>
			<h2 className={`project-title`}>{title}</h2>
		</Link>
	);
}	

export default ProjectPreview;
