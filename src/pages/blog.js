import React from "react"
import useBlogSettings from '../hooks/use-blog-settings'
import useBlogPostBasics from "../hooks/use-blog-post-basics"

import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

export default () => {
  const settings = useBlogSettings();
  const posts = useBlogPostBasics();

  return(
    <Layout>
      <SEO title={settings.title} />
      <h1>{settings.title}</h1>
      <p>{settings.subtitle}</p>
      {posts.map(({ node: post }) => {
        const postID = post._id;
        const title = post.title;
        const postSlug = post.slug.current;
        const primaryImgData = post.bannerImage;
        
        return (
          <PostPreview
            key={postID}
            title={title}
            slug={postSlug}
            primaryImgData={primaryImgData}
          />
        );
      })}
    </Layout>
  )
};
