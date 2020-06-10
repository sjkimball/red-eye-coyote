import React from 'react'

import {Link} from 'gatsby'

import PreviewImage from '../components/preview-image'

import './project-preview.css'

const ProjectPreview = ({project}) => {
  const {client, coverImg, slug, title} = project
  return (
    <Link to={`/work/${client.slug.current}/${slug.current}`} className={`project-preview`}>
      <h4 className={`project-title`}>{title}</h4>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  )
}

export default ProjectPreview
