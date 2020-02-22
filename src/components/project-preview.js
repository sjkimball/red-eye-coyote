import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './project-preview.css';

const ProjectPreview = ({ clientName, clientSlug, coverImg, title, slug}) => {

	return (
		<Link to={`/work/${clientSlug}/${slug}`} className={`project-preview`}>
			<PreviewImage imageAsset={coverImg} />
			<h2 className={`project-title`}>{title}</h2>
		</Link>
	);
}	

export default ProjectPreview;
