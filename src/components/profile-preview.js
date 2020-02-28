import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './profile-preview.css';

const ProfilePreview = ({ profile }) => {
	const { profileImg, first_name, last_name, office, slug } = profile;
	const name = `${first_name} ${last_name}`;
	const profileSlug = slug.current;
	const officeName = office.contact_info.address.city;

	return (
		<Link to={`/about/${profileSlug}`} className={`profile-preview`}>
			<PreviewImage imageAsset={profileImg} />
			<h2 className={`profile-name`}>{name}</h2>
			<p>{officeName}</p>
		</Link>
	);
}

export default ProfilePreview;
