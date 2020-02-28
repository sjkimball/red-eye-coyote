import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './project-preview.css';

const ProjectPreview = ({ project }) => {
	const { client, coverImg, slug, title } = project;
	return (
		<Link to={`/work/${client.slug.current}/${slug.current}`} className={`project-preview`}>
			<PreviewImage imageAsset={coverImg} />
			<h2 className={`project-title`}>{title}</h2>
		</Link>
	);
}

export default ProjectPreview;
