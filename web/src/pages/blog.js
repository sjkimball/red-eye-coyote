import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'

import useBlogSettings from '../hooks/use-blog-settings'
import useBlogPostBasics from '../hooks/use-blog-post-basics'

import './pages.css'

export default () => {
  const settings = useBlogSettings()
  const posts = useBlogPostBasics()

  return (
    <Layout>
      <SEO title={settings.title} />
      <article className='blog'>
        <header className={`page-header page-header--light`}>
          <h2>{settings.title}</h2>
          <p>{settings.subtitle}</p>
        </header>
        <section className={`preview-container`}>
          {posts.map(({node: post}) => {
            return (
              <PostPreview
                key={post._id}
                post={post}
              />
            )
          })}
        </section>
      </article>
    </Layout>
  )
}
