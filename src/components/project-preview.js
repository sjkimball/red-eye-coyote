import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const ProjectPreview = ({ slug, primaryImgData, title, primaryImgAlt, clientName}) => (
	<div className="project-preview">
		<Link to={`/${slug}`}>
				<Img fluid={primaryImgData} alt={primaryImgAlt} />
		</Link>
		<h2>
			<Link to={`/${slug}/`}>{title}</Link>
		</h2>
		<p>{clientName}</p>
		<p>
			<Link to={`/${slug}/`}>View this project &rarr;</Link>
		</p>
	</div>
)

export default ProjectPreview;
