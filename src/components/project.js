import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Project = ({ imageData, title, description, url}) => (
	<div className="project">
		<article>
			<div className="project-overview">
				<h1>
					{title}
				</h1>
				<h3 style={{ color: `var(--gray3)`}}>Categories will go here.</h3>
				<h2 style={{ fontSize: `19px` }}>{description}</h2>
				<Img fluid={imageData} alt={title} />
				<p>{description}</p>
			</div>
			<aside className="project-assets">
				Project Gallery
				<p>Image 1</p>
				<p>Image 2</p>
				<p>Image 3</p>
				<div className="project-metadata">
					<dl>
						<dt>Client</dt>
						<dd>Red Dog Moped</dd>
					</dl>
					<dl>
						<dt>Sector</dt>
						<dd>Private</dd>
						<dd>For Profit</dd>
					</dl>
					<dl>
						<dt>Discipline</dt>
						<dd>Brand Identity</dd>
						<dd>Web Application</dd>
					</dl>
				</div>
				<div className="firm-metadata">
					<dl>
						<dt>Office</dt>
						<dd>Nashville</dd>
					</dl>
					<dl>
						<dt>Partner</dt>
						<dd>Sam Kimball</dd>
					</dl>
				</div>
			</aside>
			<p>
				<a href={url}>View this project online &rarr;</a>
			</p>
			<p>
				<Link to="/">&larr; back to all projects</Link>
			</p>		
		</article>
	</div>
);

export default Project;
