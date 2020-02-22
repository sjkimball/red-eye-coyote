import React from 'react';

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

const PreviewImage = ({ imageAsset }) => {

	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	return (
		<img src={urlFor(imageAsset.image).size(576, 324).url()} alt={imageAsset.alt_text} className={`preview-image`}/>
	);
}	

export default PreviewImage;
