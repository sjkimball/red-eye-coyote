import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const containerStyles = {
	marginBottom: `34px`
}

const previewStyles = {
	textDecoration: `none`,	
}

const imgStyles = {
	marginBottom: `8.5px`
}

const titleStyles = {
	fontSize: `17px`,
	fontWeight: `500`,
	color: `var(--gray5)`
}

const ProjectPreview = ({ clientName, clientSlug, primaryImgAlt, primaryImgData, title, slug}) => (
	<div className="project-preview" style={containerStyles}>
		<Link to={`/work/${clientSlug}/${slug}`} style={previewStyles}>
			<Img
				fluid={primaryImgData}
				alt={primaryImgAlt}
				sizes={{ ...primaryImgData, aspectRatio: 16 / 9 }}
				style={imgStyles}
			/>
			<h2 style={titleStyles}>{title}</h2>
		</Link>
	</div>
)

export default ProjectPreview;
