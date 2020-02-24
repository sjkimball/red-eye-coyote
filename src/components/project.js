import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './project.css'

const Project = ({ client_name, coverImg, contributers, disciplines, offices, proj_summary, proj_desc, title, sectors, productImgs}) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	console.log(offices);

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
				<h2>
					{proj_summary}
				</h2>
				<PreviewImage imageAsset={coverImg} />
			</header>
			<BlockContent blocks={proj_desc} serializers={serializers} className={`project-body`}/>
			<aside className={`project-aside`}>
				<div className={`project-gallery`}>
					{productImgs.map((image) =>
						<PreviewImage
							key={image.image.asset._id}
							imageAsset={image}
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
						<li key={offices._id} value={offices.contact_info.address.city}>{offices.contact_info.address.city}</li>
					</ul>
					<h6>Partner</h6>
					<ul>
						{contributers.map((object) => 
							<li key={object._id} value={object.name}>{object.first_name} {object.last_name}</li>
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
