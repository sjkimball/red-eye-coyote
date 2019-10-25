import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

import './project.css'

const Project = ({ client_name, coverImg, creators, disciplines, offices, proj_summary, proj_desc, title, sectors, supportingImgs}) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	return (
		<article className={`rec-project`}>
			<header className={`project-header`}>
				<h1>
					{title}
				</h1>
				<h6 hidden>Disciplines</h6>
				<ul className={`project-disciplines`}>
					{disciplines.map((discipline) => 
						<li key={discipline._id} value={discipline.title}>{discipline.title}</li>
					)}
				</ul>
				<img src={urlFor(coverImg.file).url()} alt={coverImg.alt_text} className={`project-hero`}/>
			</header>
			<BlockContent blocks={proj_desc} serializers={serializers} className={`project-body`}/>
			<aside className={`project-aside`}>
				<div className={`project-gallery`}>
					{supportingImgs.map((image) => 
						<Img
							key={image._key}
							fluid={image.file.asset.fluid}
							alt={image.alt_text}
							sizes={{...image.file.asset.fluid, aspectRatio: 4 / 3 }}
							className={`gallery-image`}
						/>
					)}		
				</div>
			</aside>
			<section className="project-details">
				<div className={`project-metadata`}>
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
				<div className={`project-company-info`}>
					<h6>Office</h6>
				{/*Will need to be updated to support multiple offices*/}
					<ul>
						<li key={offices._id} value={offices.address.city}>{offices.address.city}</li>
					</ul>
					<h6>Partner</h6>
					<ul>
						{creators.map((object) => 
							<li key={object._id} value={object.name}>{object.name}</li>
						)}
					</ul>
				</div>
			</section>
			<footer className={`project-footer`}>
				<Link to="/work">&larr; Work</Link>
			</footer>		
		</article>
	);
}


export default Project;
