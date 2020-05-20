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
      <article className='work'>
        <header className={`page-header page-header--light work__header`}>
          <h1>Work</h1>
          <p>Take a look.</p>
        </header>
        <section className='preview-container'>
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
