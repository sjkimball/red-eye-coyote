import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from '../hooks/use-sanity-options'

const AvatarImage = ({imageAsset}) => {
  const mySanityConfig = useSanityOptions()

  const builder = imageUrlBuilder(mySanityConfig)

  function urlFor (source) {
    return builder.image(source)
  }

  const avatarSrcSet = `
		${urlFor(imageAsset).width(50).height(50)} 50w,
		${urlFor(imageAsset).width(100).height(100)} 100w,
		${urlFor(imageAsset).width(50).height(50).dpr(2)} 100w,
		${urlFor(imageAsset).width(100).height(100).dpr(2)} 200w
	`

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      srcSet={avatarSrcSet}
      // sizes={`
      //   (max-width: 320px) 288px,
      //   (max-width: 480px) 448px,
      //   (max-width: 767px) 700px,
      //   800px
      // `}
      src={urlFor(imageAsset)
        .auto('format')
      }
      alt={imageAsset.altText}
      className={`avatar-image`}
    />
  )
  return (
    renderedImage
  )
}

export default AvatarImage
