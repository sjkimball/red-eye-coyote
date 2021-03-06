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
      <article className={`rec-article rec-work`}>
        <header className={`rec-article__header .rec-work__header`}>
          <h2>Work</h2>
          <p>Take a look.</p>
        </header>
        <section className={`rec-preview-container`}>
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
