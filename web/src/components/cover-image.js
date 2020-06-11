import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from '../hooks/use-sanity-options'

const CoverImage = ({imageAsset, showCaption}) => {
  const mySanityConfig = useSanityOptions()

  const builder = imageUrlBuilder(mySanityConfig)

  function urlFor (source) {
    return builder.image(source)
  }

  const letterboxSrcSet = `
	${urlFor(imageAsset).width(400).height(225)} 400w,
	${urlFor(imageAsset).width(600).height(338)} 600w,
	${urlFor(imageAsset).width(400).height(225).dpr(2)} 800w,
	${urlFor(imageAsset).width(600).height(338).dpr(2)} 1200w
	`

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      srcSet={letterboxSrcSet}
      sizes={`
        (max-width: 320px) 320px,
        (max-width: 480px) 448px,
        (max-width: 767px) 800px,
        1200px
      `}
      src={urlFor(imageAsset)
        .auto('format')
      }
      alt={imageAsset.altText}
      className={'cover-image'}
    />
  )

  if (showCaption === true) {
    return (
      <figure>
        {renderedImage}
        <figcaption>{imageAsset.caption}</figcaption>
      </figure>
    )
  } else {
    return (
      renderedImage
    )
  }
}

export default CoverImage
