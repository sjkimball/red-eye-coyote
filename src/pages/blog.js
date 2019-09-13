import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"

import useBlogSettings from '../hooks/use-blog-settings'
import useBlogPostBasics from "../hooks/use-blog-post-basics"

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
        const subtitle = post.subtitle;
        const postSlug = post.slug.current;
        const mainImage = post.mainImage;
        
        return (
          <PostPreview
            key={postID}
            title={title}
            subtitle={subtitle}
            slug={postSlug}
            mainImage={mainImage}
          />
        );
      })}
    </Layout>
  )
};
