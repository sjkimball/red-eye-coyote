import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './contentLayout.css'

const serializer = {
	container: 'section',
	types: {
		figure: props => (
			<PreviewImage imageAsset={props.node} showCaption={true} />
		)
	}
}

const Profile = ({ profile }) => {
	const {
		profileImg,
		name,
		office,
		_rawBio
	} = profile;

	return (
		<article id={`rec-profile`} className={`rec-article rec-article--dark`}>
			<header id={`rec-profile__header`} className={`rec-article__header rec-article__header--dark`}>
				<h2>{name}
					<br/>
					<span>{office.contactInfo.address.city}</span>
				</h2>
				<PreviewImage imageAsset={profileImg} profilePic={true} />
			</header>
			<section id={`rec-profile__body`} className="rec-article__body">
				<BlockContent blocks={_rawBio} serializers={serializer} renderContainerOnSingleChild={true} className={`rec-body__bio`}/>
			</section>
			<footer id={`rec-profile__footer`} className={`rec-article__footer`}>
				<h6>Additional Information</h6>
				<a href={`https://indd.adobe.com/view/2b8d0c68-0fd6-48a6-8e68-14709b35471e`} target="_blank" rel="noopener noreferrer">Resume</a>
				<a href={`https://www.linkedin.com/in/sjkimball/`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</footer>
		</article>
	);
};

export default Profile;
