import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Project = ({ client_name, creators, disciplines, imageAlt, imageData, office, proj_summary, title, sectors}) => {

//Need to iterate sectors, disciplines, and creators

	return (
		<div className="project">
			<article>
				<div className="project-overview">
					<h1>
						{title}
					</h1>
					<h3 style={{ color: `var(--gray3)`}}>{sectors}</h3>
					<h2 style={{ fontSize: `19px` }}>{proj_summary}</h2>
					<Img fluid={imageData} alt={imageAlt} />
					<p>Something goes here.</p>
				</div>
				<aside className="project-assets">
					Project Gallery
					<p>Image 1</p>
					<p>Image 2</p>
					<p>Image 3</p>
					<div className="project-metadata">
						<dl>
							<dt>Client</dt>
							<dd>{client_name}</dd>
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
							<dd>{office}</dd>
						</dl>
						<dl>
							<dt>Partner</dt>
							<dd>Sam Kimball</dd>
						</dl>
					</div>
				</aside>
				<p>
					Needs to be a link in here.
				</p>
				<p>
					<Link to="/">&larr; back to all projects</Link>
				</p>		
			</article>
		</div>
	);
}


export default Project;
