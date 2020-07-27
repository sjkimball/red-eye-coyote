import React from 'react'

import {Link} from 'gatsby'

import PreviewImage from '../components/preview-image'

import { format } from 'date-fns'

import './preview.css'

const PostPreview = ({post}) => {
  const {coverImg, publishedAt, title, slug, subtitle} = post
  const formattedDate = format(publishedAt, 'MMMM d, YYYY')
  return (
    <Link to={`/blog/${slug.current}`} className={`preview preview--light`}>
      <h4>{title}</h4>
      <time dateTime={publishedAt}>{formattedDate}</time>
      <p>{subtitle}</p>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  )
}

export default PostPreview
