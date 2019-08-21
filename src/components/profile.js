import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';


const Profile = ({name, bio, imageData }) => {

	const serializers = {
		types: {
			children: props => (
				<pre>
					{props.node.children}
				</pre>	
			)
		}
	}

	return (
		<div>
			<Img fluid={imageData} alt={name} />
			<h1>Hey. I'm Sam.</h1>
			<BlockContent blocks={bio} serializers={serializers} />			
		</div>
	);
};

export default Profile;
