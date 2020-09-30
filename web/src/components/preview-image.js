import React from 'react'

import { imageUrlFor } from '../lib/image-url'
import { imageSrcSet, imageSizes } from '../lib/image-sizing'

const PreviewImage = ({imageAsset, showCaption, imageType}) => {
   function assignClass (imageType) {
    switch (imageType) {
      case 'avatar':
        return 'avatar-image';
        break;
      case 'cover':
        return 'cover-image';
        break;
      default:
        return 'preview-image'
    }
  }  

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      srcSet={imageSrcSet(imageAsset, imageType)}
      sizes={imageSizes(imageType)}
      src={imageUrlFor(imageAsset)
        .auto('format')
      }
      alt={imageAsset.altText}
      className={assignClass(imageType)}
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

export default PreviewImage
