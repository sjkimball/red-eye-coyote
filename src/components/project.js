import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './project.css'

const serializer = {
	container: 'section',
	types: {
		customImage: props => (
				<PreviewImage imageAsset={props.node} showCaption={true} />
		)
	}
}

const Project = ({ project }) => {
	const {
		client,
		title,
		sectors,
		projectSummary,
		_rawProjectDesc,
		coverImg,
		productImgs,
		office,
		disciplines,
		contributors
	} = project;

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
			<BlockContent blocks={_rawProjectDesc} serializers={serializer} className={`project-body`}/>
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
						<li>{client.clientName}</li>
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
					<ul>
						<li key={office._id} value={office.contactInfo.address.city}>{office.contactInfo.address.city}</li>
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
