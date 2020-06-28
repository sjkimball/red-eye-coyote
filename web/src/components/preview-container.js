import {Link} from 'gatsby'
import React from 'react'

import ProjectPreview from '../components/project-preview'
import PostPreview from '../components/post-preview'

const PreviewContainer = ({content}) => {
  let title;
  let preview;
  if(content._type == 'featuredProjects') {
    title = 'Featured Projects' 
    preview = content.projects.map((project, index) => {
      return (
        <ProjectPreview key={index} project={project}/>
      )
    })
  }else if(content._type == 'featuredPosts') {
    title = 'Featured Posts'
    preview = content.posts.map((post, index) => {
      return (
        <PostPreview key={index} post={post} />
      )
    })
  }
  return (
    <>
      <h3>{title}</h3>
      <section className={`rec-preview-container`}>
        {preview}
      </section>
    </>
  )
}

export default PreviewContainer