import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';


const Profile = ({name, bio, imageData, email, phone, github, twitter }) => {

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<article>
			<header>
				<Img fluid={imageData} alt={name} sizes={{...imageData, aspectRatio: 1 / 1}}/>			
				<h4>{name}</h4>
			</header>
			<BlockContent blocks={bio} serializers={serializers}/>
			<h6>Contact Info</h6>
			<ul>
				<li><a href={`mailto:${email}`}>{email}</a></li>
				<li>{phone}</li>
				<li>{github}</li>	
				<li>{twitter}</li>
			</ul>
		</article>
	);
};

export default Profile;
