import React from 'react';

import Img from 'gatsby-image';

import BlockContent from '@sanity/block-content-to-react';

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
			<header className={`profile-header`}>
				<h1>{name}
					<br/>
					<span>{office}</span>
				</h1>
			</header>
			<Img 
				fluid={imageData.file.asset.fluid}
				alt={name}
				sizes={{...imageData.file.asset.fluid, aspectRatio: 1 / 1}}
				className={`profile-img`}
				// style={{position: `fixed`}}
			/>
			<BlockContent blocks={bio} serializers={serializers} className={`profile-bio`}/>				
			<section className={`profile-info`}>
				<h6>Additional Information</h6>
				<a href={personDoc.asset.url} target="_blank" rel="noopener noreferrer"><span>Resume</span></a>
				<a href={`https://www.linkedin.com/in/sjkimball/`} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
			</section>			
		</article>
	);
};

export default Profile;
