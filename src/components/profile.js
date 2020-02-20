import React from 'react';

import useSanityOptions from "../hooks/use-sanity-options";

import imageUrlBuilder from '@sanity/image-url'

import BlockContent from '@sanity/block-content-to-react';

import './profile.css';

const Profile = ({bio, imageData, name, office, personDoc, socialAccounts }) => {

	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

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
			<img
				src={urlFor(imageData.image).width(500).url()}
				alt={imageData.alt_text}
				className={`profile-img`}
			/>
			<BlockContent blocks={bio} serializers={serializers} className={`profile-bio`}/>				
			<section className={`profile-info`}>
				<h6>Additional Information</h6>
				<a href={`https://indd.adobe.com/view/3cf8b7d4-92ea-4eb6-af0d-a0677a8e392d`} target="_blank" rel="noopener noreferrer"><span>Resume</span></a>
				<a href={`https://www.linkedin.com/in/sjkimball/`} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
			</section>			
		</article>
	);
};

export default Profile;
