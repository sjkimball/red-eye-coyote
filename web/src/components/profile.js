import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';
import ProjectPreview from '../components/project-preview'

import './contentLayout.css'

const serializer = {
	container: 'section',
	types: {
		figure: props => (
			<PreviewImage imageAsset={props.node} showCaption={true} />
		)
	}
}

const Profile = ({ profile, relatedProjects }) => {
	const {
		profileImg,
		name,
		office,
		_rawBio
	} = profile;

	return (
		<article id={`rec-profile`} className={`rec-article rec-article--dark rec-profile`}>
			<header className={`rec-article__header rec-article__header--dark`}>
				<h2>{name}
					<br/>
					<span>{office.contactInfo.address.city}</span>
				</h2>
				<PreviewImage imageAsset={profileImg} profilePic={true} />
			</header>
			<section id={`rec-profile__body`} className="rec-article__body">
				<BlockContent blocks={_rawBio} serializers={serializer} renderContainerOnSingleChild={true} className={`rec-body__bio`}/>
			</section>
			<section className={`rec-preview-container`}>
				{
					relatedProjects.map(({node: project}) => <ProjectPreview project={project} />)
				}
			</section>
		</article>
	);
};

export default Profile;
