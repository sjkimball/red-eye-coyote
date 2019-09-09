import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import './post.css'

const Project = ({ client_name, creators, disciplines, imageAlt, imageData, offices, proj_summary, proj_desc, title, sectors, supportingImgs}) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<div>
			<article className={`rec-project`}>
				<header className={`project-header`}>
					<h1>
						{title}
					</h1>
					<h6 hidden>Disciplines</h6>
					<ul className={`header-list`}>
						{disciplines.map((discipline) => 
							<li key={discipline._id} value={discipline.title}>{discipline.title}</li>
						)}
					</ul>
					<h2 className={`header-summary`}>{proj_summary}</h2>
					<Img 
						fluid={imageData.img_file.asset.fluid}
						alt={imageData.alt_text}
						sizes={{...imageData.img_file.asset.fluid, aspectRatio: 4 / 3 }}
					/>
				</header>
				<BlockContent blocks={proj_desc} serializers={serializers} className={`project-body`}/>
				<aside className={`project-aside`}>
					<div className={`project-gallery`}>
						<h6>Project Gallery</h6>
						{supportingImgs.map((image) => 
							<Img
								fluid={image.img_file.asset.fluid}
								alt={image.alt_text}
								sizes={{...image.img_file.asset.fluid, aspectRatio: 4 / 3 }}
								className={`gallery-image`}
							/>
						)}		
					</div>
					<div className={`aside-metadata`}>
						<h6>Client</h6>
						<ul>
							<li>{client_name}</li>
						</ul>
						<h6>Sector</h6>
						<ul>
							{sectors.map((object) => 
								<li key={object._id} value={object.title}>{object.title}</li>
							)}
						</ul>
						<h6>Disciplines</h6>
						<ul>
							{disciplines.map((object) => 
								<li key={object._id} value={object.title}>{object.title}</li>
							)}
						</ul>
					</div>
					<div className={`aside-company-info`}>
						<h6>Office</h6>
					{/*Will need to be updated to support multiple offices*/}
						<ul>
							<li key={offices._id} value={offices.city}>{offices.city}</li>
						</ul>
						<h6>Partner</h6>
						<ul>
							{creators.map((object) => 
								<li key={object._id} value={object.name}>{object.name}</li>
							)}
						</ul>
					</div>
				</aside>
				<footer className={`project-footer`}>
					<Link to="/work">&larr; Work</Link>
				</footer>		
			</article>
		</div>
	);
}


export default Project;
