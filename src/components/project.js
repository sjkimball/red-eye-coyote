import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './project.css'

const Project = ({ clientName, coverImg, contributors, disciplines, offices, projectSummary, projectDesc, title, sectors, productImgs}) => {

	const serializers = {
		container: 'section',
		types: {
			block: props =>
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<article className={`rec-project`}>
			<header className={`project-header`}>
				<h1>
					{title}
				</h1>
				<h6 hidden>Disciplines</h6>
				<ul className={`project-disciplines`}>
					{disciplines.map((discipline, index) =>
						<li key={index} value={discipline}>{discipline}</li>
					)}
				</ul>
				<h2>
					{projectSummary}
				</h2>
				<PreviewImage imageAsset={coverImg} />
			</header>
			<BlockContent blocks={projectDesc} serializers={serializers} className={`project-body`}/>
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
						<li>{clientName}</li>
					</ul>
					<h6>Sector</h6>
					<ul className={`project-sectors`}>
						{sectors.map((sector, index) =>
							<li key={index} value={sector}>{sector}</li>
						)}
					</ul>
					<h6>Disciplines</h6>
					<ul>
						{disciplines.map((discipline, index) =>
							<li key={index} value={discipline}>{discipline}</li>
						)}
					</ul>
				</div>
				<div className={`project-company-info`}>
					<h6>Office</h6>
				{/*Will need to be updated to support multiple offices*/}
					<ul>
						<li key={offices._id} value={offices.contactInfo.address.city}>{offices.contactInfo.address.city}</li>
					</ul>
					<h6>Partner</h6>
					<ul>
						{contributors.map((contributor) =>
							<li key={contributor._key} value={`${contributor.name.first_name} ${contributor.name.last_name}`}>{contributor.name.first_name} {contributor.name.last_name}</li>
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
