import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingPage from '../components/landing-page'

import useLandingPage from '../hooks/use-landing-page'

import './pages.css'

const IndexPage = () => {
  const pageContent = useLandingPage();

  return (
    <Layout>
      <SEO title='Home' />
      <LandingPage pageContent={pageContent} />
    </Layout>
  )
}

export default IndexPage
