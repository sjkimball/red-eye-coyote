import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Project = ({ imageData, title, description, url}) => (
	<div className="project">
		<h1>
			{title}
		</h1>
		<Img fluid={imageData} alt={title} />
		<p>{description}</p>
		<p>
			<a href={url}>View this project online &rarr;</a>
		</p>
		<p>
			<Link to="/">&larr; back to all projects</Link>
		</p>
	</div>
);

export default Project;
