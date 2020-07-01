import {Link} from 'gatsby'
import React from 'react'

import ContentPreview from './content-preview'

const FeaturedContainer = ({content}) => {
  let title, preview = null;

  function checkContentType (contentArray) {
    switch(contentArray._type) {
      case 'featuredProjects':
        title = 'Projects';
        preview = content.projects.map((project, index) => {
          return (
            <ContentPreview key={index} contentType={`project`} content={project}/>
          )
        }) 
        break;
      case 'featuredPosts':
        title = 'Posts';
        preview = content.posts.map((post, index) => {
          return (
            <ContentPreview key={index} contentType={`post`} content={post}/>
          )
        })
        break;
      case 'featuredPeople':
        title = 'People';
        preview = content.people.map((person, index) => {
          return (
            <ContentPreview key={index} contentType={`person`} content={person} />
          )
        })
        break;
      default:
        title = null;
        preview = null;
        break;
    }
  }
  checkContentType(content);

  return (
    <>
      <h3>{title}</h3>
      <section className={`rec-preview-container`}>
        {preview}
      </section>
    </>
  )
}

export default FeaturedContainer