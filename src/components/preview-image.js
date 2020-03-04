import React from 'react';

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

const PreviewImage = ({ imageAsset, showCaption }) => {

	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	if (showCaption === true) {
		return (
			<figure className={`preview-image`}>
				<img src={urlFor(imageAsset.image).auto('format').url()} alt={imageAsset.altText} className={`preview-image`}/>
				<figcaption>{imageAsset.caption}</figcaption>
			</figure>
			);
	} else {
			return (
				<img src={urlFor(imageAsset.image).auto('format').url()} alt={imageAsset.altText} className={`preview-image`}/>
			);
	}
}

export default PreviewImage;
