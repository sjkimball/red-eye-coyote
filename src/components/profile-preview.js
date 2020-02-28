import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './profile-preview.css';

const ProfilePreview = ({ officeName, profileSlug, profileImg, name}) => {

	return (
		<Link to={`/about/${profileSlug}`} className={`profile-preview`}>
			<PreviewImage imageAsset={profileImg} />
			<h2 className={`profile-name`}>{name}</h2>
			<p>{officeName}</p>
		</Link>
	);
}

export default ProfilePreview;
