import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './preview.css';

const ProjectPreview = ({ clientName, clientSlug, primaryImgAlt, primaryImgData, title, slug}) => {
	return (
		<div className={`rec-container`}>
			<Link to={`/work/${clientSlug}/${slug}`} className={`project-preview`}>
				<Img
					fluid={primaryImgData.img_file.asset.fluid}
					alt={primaryImgData.alt_text}
					sizes={{ ...primaryImgData.img_file.asset.fluid, aspectRatio: 16 / 9 }}
					className={`project-thumb`}
				/>
				<h2 className={`project-title`}>{title}</h2>
			</Link>
		</div>
	);
}
	

export default ProjectPreview;
