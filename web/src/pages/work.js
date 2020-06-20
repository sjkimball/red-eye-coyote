import React from 'react'

import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'
import SEO from '../components/seo'

import useProjectBasics from '../hooks/use-project-basics'

import './pages.css'

export default () => {
  const projects = useProjectBasics()
  return (
    <Layout>
      <SEO title='Work' />
      <article id={`rec-work`} className={`rec-article`}>
        <header id={`rec-work__header`} className={`rec-article__header`}>
          <h2>Work</h2>
          <p>Take a look.</p>
        </header>
        <section id={`rec-work__body`} className={`rec-preview-container`}>
          {projects.map(({node: project}) => {
            return (
              <ProjectPreview
                key={project._id}
                project={project}
              />
            )
          })}
        </section>
      </article>
    </Layout>
  )
}
