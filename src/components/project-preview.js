import React from 'react';

import { Link } from 'gatsby';

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

import './project-preview.css';

const ProjectPreview = ({ clientName, clientSlug, coverImg, title, slug}) => {

	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	return (
		<Link to={`/work/${clientSlug}/${slug}`} className={`project-preview`}>
			<img src={urlFor(coverImg.image).width(500).height(281).url()} alt={coverImg.alt_text} className={`project-thumb`}/>
			<h2 className={`project-title`}>{title}</h2>
		</Link>
	);
}	

export default ProjectPreview;
