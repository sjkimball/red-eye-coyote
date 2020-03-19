import React from 'react';

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

const PreviewImage = ({ imageAsset, showCaption }) => {
	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	const {
		altText,
		caption,
		image: {
			asset: {
				_id,
				metadata
			}
		}
	} = imageAsset;

	// Need to implement lqip as backgroundImage
	// console.log(metadata.lqip);

	const image = (
		<img
			srcSet={`
        ${urlFor(_id).width(400)} 400w,
        ${urlFor(_id).width(600)} 600w,
        ${urlFor(_id).width(400).dpr(2)} 800w,
        ${urlFor(_id).width(600).dpr(2)} 1200w
      `}
      sizes={`
        (max-width: 320px) 288px,
        (max-width: 480px) 448px,
        (max-width: 759px) 700px,
        475px
      `}
			src={urlFor(_id)
				.auto('format')
				}
			alt={altText}
			className={"preview-image"}
		/>
	);

	if (showCaption === true) {
		return (
			<figure className={`preview-image`}>
				{image}
				<figcaption>{caption}</figcaption>
			</figure>
			);
	} else {
			return (
				image
			);
	}
}

export default PreviewImage;
