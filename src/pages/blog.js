import React from "react"
import useBlogPostBasics from "../hooks/use-blog-post-basics"

import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

export default () => {
  const posts = useBlogPostBasics();

  return(
    <Layout>
      <SEO title="Blog" />
      {posts.map(({ node: post }) => {
        const postID = post._id;
        const title = post.title;
        const postSlug = post.slug.current;
        const primaryImgData = post.mainImage.asset.fluid;
        
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
