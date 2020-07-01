import React from 'react'

import ProjectPreview from '../components/project-preview'
import PostPreview from '../components/post-preview'
import ProfilePreview from '../components/profile-preview'

const ContentPreview = ({content, contentType}) => {
  function previewType (type) {
    let preview = null;
    switch(type) {
      case 'project':
        preview = <ProjectPreview project={content} />;
        break;
      case 'post':
        preview = <PostPreview post={content} />;
        break;
      case 'person':
        preview = <ProfilePreview profile={content} />;
        break;
      default:
        preview = null;
    }
    return preview;
  }
  let previewEl = previewType(contentType);

  return (
    previewEl
  )
}
export default ContentPreview