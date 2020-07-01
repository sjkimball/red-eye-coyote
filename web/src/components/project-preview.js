import React from 'react'

import {Link} from 'gatsby'

import PreviewImage from '../components/preview-image'

import './preview.css'

const ProjectPreview = ({project}) => {
  const {client, coverImg, slug, title} = project
  return (
    <Link to={`/work/${client.slug.current}/${slug.current}`} className={`preview preview--light`}>
      <h4>{title}</h4>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  )
}

export default ProjectPreview
