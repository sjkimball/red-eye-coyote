import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

import './profile.css';

const Profile = ({name, bio, imageData, email, phone, github, twitter }) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<article className={`profile`}>
			<header>
				<Img fluid={imageData.img_file.asset.fluid} alt={name} sizes={{...imageData.img_file.asset.fluid, aspectRatio: 1 / 1}} className={`profile-img`}/>
			</header>
			<h6>Bio</h6>
			<BlockContent blocks={bio} serializers={serializers} className={`profile-bio`}/>
			<h6>Resume</h6>
			<p>Download link for resume</p>
		</article>
	);
};

export default Profile;
