import { imageUrlFor } from '../lib/image-url'

const letterboxSrcSet = (imageAsset) => `
  ${imageUrlFor(imageAsset).width(400).height(225)} 400w,
  ${imageUrlFor(imageAsset).width(600).height(338)} 600w,
  ${imageUrlFor(imageAsset).width(400).height(225).dpr(2)} 800w,
  ${imageUrlFor(imageAsset).width(600).height(338).dpr(2)} 1200w
`
const squareSrcSet = (imageAsset) =>`
  ${imageUrlFor(imageAsset).width(400).height(400)} 400w,
  ${imageUrlFor(imageAsset).width(600).height(600)} 600w,
  ${imageUrlFor(imageAsset).width(400).height(400).dpr(2)} 800w,
  ${imageUrlFor(imageAsset).width(600).height(600).dpr(2)} 1200w
`
const avatarSrcSet = (imageAsset) =>`
  ${imageUrlFor(imageAsset).width(50).height(50)} 50w,
  ${imageUrlFor(imageAsset).width(100).height(100)} 100w,
  ${imageUrlFor(imageAsset).width(50).height(50).dpr(2)} 100w,
  ${imageUrlFor(imageAsset).width(100).height(100).dpr(2)} 200w
`
const previewSizes = `
  (max-width: 320px) 288px,
  (max-width: 480px) 448px,
  (max-width: 767px) 700px,
  800px
`
const coverSizes = `
  (max-width: 320px) 320px,
  (max-width: 480px) 448px,
  (max-width: 767px) 800px,
  1200px
`
// Below sizes will need to be adjusted
const avatarSizes = `
  (max-width: 320px) 288px,
  (max-width: 480px) 448px,
  (max-width: 767px) 700px,
  800px
`
export function imageSrcSet (imageType, imageAsset) {
  switch (imageType) {
    case 'square':
      return squareSrcSet(imageAsset);
      break;
    case 'avatar':
      return avatarSrcSet(imageAsset);
      break;
    default:
      return letterboxSrcSet(imageAsset);
  }
}

export function imageSizes (imageType) {
  switch (imageType) {
    case 'cover':
      return coverSizes;
      break;
    case 'avatar':
      return avatarSizes;
      break;
    default:
      return previewSizes;
  }
}
