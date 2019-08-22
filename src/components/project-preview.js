import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const ProjectPreview = ({ clientName, clientSlug, primaryImgAlt, primaryImgData, title, slug}) => (
	<div className="project-preview">
		<Link to={`/${clientSlug}/${slug}`}>
				<Img fluid={primaryImgData} alt={primaryImgAlt} />
		</Link>
		<h2>
			<Link to={`/${clientSlug}/${slug}/`}>{title}</Link>
		</h2>
		<p>{clientName}</p>
		<p>
			<Link to={`/${slug}/`}>View this project &rarr;</Link>
		</p>
	</div>
)

export default ProjectPreview;
