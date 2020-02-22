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
      <header className={`page-header`}>
        <h1>{settings.title}</h1>
        <p>{settings.subtitle}</p>        
      </header>
      {posts.map(({ node: post }) => {
        const mainImage = post.mainImage;
        const postID = post._id;
        const postSlug = post.slug.current;
        const publishedAt = post.publishedAt;
        const subtitle = post.subtitle;
        const title = post.title;
        
        return (
          <PostPreview
            key={postID}
            mainImage={mainImage}
            publishedAt={publishedAt}
            subtitle={subtitle}
            slug={postSlug}
            title={title}
          />
        );
      })}
    </Layout>
  )
};
