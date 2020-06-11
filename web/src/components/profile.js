import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './profile.css';

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
		<article id={`rec-profile`} className={`profile`}>
			<header className={`profile-header`}>
				<h2>{name}
					<br/>
					<span>{office.contactInfo.address.city}</span>
				</h2>
				<PreviewImage imageAsset={profileImg} profilePic={true} />
			</header>
			<BlockContent blocks={_rawBio} serializers={serializer} renderContainerOnSingleChild={true} className={`profile-bio`}/>
			<section className={`profile-info`}>
				<h6>Additional Information</h6>
				<a href={`https://indd.adobe.com/view/2b8d0c68-0fd6-48a6-8e68-14709b35471e`} target="_blank" rel="noopener noreferrer">Resume</a>
				<a href={`https://www.linkedin.com/in/sjkimball/`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</section>
		</article>
	);
};

export default Profile;
