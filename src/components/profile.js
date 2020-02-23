import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './profile.css';

const Profile = ({bio, imageData, name, office, personDoc, socialAccounts }) => {

	const serializers = {
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<article className={`profile`}>
			<header className={`page-header profile-header`}>
				<h1>{name}
					<br/>
					<span>{office}</span>
				</h1>
				<PreviewImage imageAsset={imageData} />
			</header>
			<BlockContent blocks={bio} serializers={serializers} className={`profile-bio`}/>				
			<section className={`profile-info`}>
				<h6>Additional Information</h6>
				<a href={`https://indd.adobe.com/view/3cf8b7d4-92ea-4eb6-af0d-a0677a8e392d`} target="_blank" rel="noopener noreferrer">Resume</a>
				<a href={`https://www.linkedin.com/in/sjkimball/`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</section>			
		</article>
	);
};

export default Profile;
