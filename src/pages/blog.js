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
      <header className={`page-header page-header--light`}>
        <h1>{settings.title}</h1>
        <p>{settings.subtitle}</p>
      </header>
      {posts.map(({ node: post }) => {
        return (
          <PostPreview
            key={post._id}
            post={post}
          />
        );
      })}
    </Layout>
  )
};
