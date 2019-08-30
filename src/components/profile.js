import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';


const Profile = ({name, bio, imageData }) => {

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
				<h1>{name}</h1>
				<figure>
					<Img fluid={imageData} alt={name} sizes={{...imageData, aspectRatio: 1 / 1}}/>
					<figcaption>Photo caption</figcaption>				
				</figure>			
			</header>
			<BlockContent blocks={bio} serializers={serializers}/>			
		</article>
	);
};

export default Profile;
