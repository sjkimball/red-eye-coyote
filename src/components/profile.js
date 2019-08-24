import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';


const Profile = ({name, bio, imageData }) => {

	// const serializers = {
	// 	types: {
	// 		children: props => (
	// 			<pre>
	// 				{props.node.children}
	// 			</pre>	
	// 		)
	// 	}
	// }

	return (
		<article>
			<header>
				<figure>
					<Img fluid={imageData} alt={name} />
					<figcaption>{name}</figcaption>				
				</figure>			
			</header>
			<section>
				<h1>Hey. I'm Sam.</h1>
				<BlockContent blocks={bio} />			
			</section>
		</article>
	);
};

export default Profile;
