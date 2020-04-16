import React from 'react';

import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';

import CoverImage from '../components/cover-image';
import PreviewImage from '../components/preview-image';

import './project.css'

const serializer = {
	container: 'section',
	types: {
		customImage: props => {
			return(
				<PreviewImage imageAsset={props.node} showCaption={true}/>
			);
		}
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
		<article id={`rec-project`} className={`project`}>
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
			</header>
			<section className={`project-cover`}>
				<CoverImage imageAsset={coverImg}/>
			</section>
			<section className={'project-body'}>
				<BlockContent blocks={_rawProjectDesc} serializers={serializer} className={`project-description`} />
				<section className={`project-gallery`}>
					{productImgs.map((image) => {
						return (
						<PreviewImage
							key={image.image.asset._id}
							imageAsset={image}
						/>
						);
					})}
				</section>
			</section>
			<section className="project-details">
				<section className={`project-metadata`}>
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
				</section>
				<section className={`project-company-info`}>
					<h6>Office</h6>
					<ul>
						<li key={office._id} value={office.contactInfo.address.city}>{office.contactInfo.address.city}</li>
					</ul>
					<h6>Partner</h6>
					<ul>
						{contributors.map((contributor) =>
							<li key={contributor._key} value={`${contributor.name.firstName} ${contributor.name.lastName}`}>{contributor.name.firstName} {contributor.name.lastName}</li>
						)}
					</ul>
				</section>
			</section>
			<footer className={`project-footer`}>
				<Link to="/work">&larr; Work</Link>
			</footer>
		</article>
	);
}

export default Project;
