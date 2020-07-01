import React from 'react'

import {Link} from 'gatsby'

import PreviewImage from '../components/preview-image'

import './preview.css'

const PostPreview = ({post}) => {
  const {coverImg, publishedAt, title, slug, subtitle} = post
  return (
    <Link to={`/blog/${slug.current}`} className={`preview preview--light`}>
      <h4>{title}</h4>
      <time dateTime={publishedAt}>{publishedAt}</time>
      <p>{subtitle}</p>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  )
}

export default PostPreview
