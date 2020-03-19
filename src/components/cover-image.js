import React from 'react';

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

const CoverImage = ({ imageAsset, showCaption }) => {
	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	const small = urlFor(imageAsset.image).auto('format').size(348,196).fit('fillmax').dpr(2).url()
	// const medium = urlFor(imageAsset.image).auto('format').size(620,348).fit(`clip`).url()
	// const large = urlFor(imageAsset.image).auto('format').size(688,388).fit(`clip`).url()
	// const xlarge = urlFor(imageAsset.image).auto('format').size(1400,788).fit(`clip`).url()

	const image = <img
									src={small}
									alt={imageAsset.altText}
									className={'cover-image'}
								/>

	if (showCaption === true) {
		return (
			<figure className={`cover-image`}>
				{image}
				<figcaption>{imageAsset.caption}</figcaption>
			</figure>
			);
	} else {
			return (
				image
			);
	}
}

export default CoverImage;
