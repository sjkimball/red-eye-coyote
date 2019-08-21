import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const ProjectPreview = ({ slug, imageData, title, description}) => (
	<div className="project-preview">
		<Link to={`/${slug}`}>
				<Img fluid={imageData} alt={title} />
		</Link>
		<h2>
			<Link to={`/${slug}/`}>{title}</Link>
		</h2>
		<p>{description}</p>
		<p>
			<Link to={`/${slug}/`}>View this project &rarr;</Link>
		</p>
	</div>
)

export default ProjectPreview;
