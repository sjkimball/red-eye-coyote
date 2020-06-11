import React from 'react'

import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingPage from '../components/landing-page'

import './pages.css'

export const query = graphql`
query LandingPage {
  page: sanityPage(_id: {regex: "/(drafts.|)frontpage/"}) {
    heading
    subheading
  }
}

fragment imageData on SanityCustomImage {
  altText
  caption
  image {
    asset {
      _id
      metadata {
        lqip
      }
    }
    crop {
      top
      bottom
      left
      right
    }
    hotspot {
      x
      y
      height
      width
    }
  }
}`

const IndexPage = ({data}) => {
  const pageContent = data.page

  return (
    <Layout>
      <SEO title='Home' />
      <LandingPage pageContent={pageContent} />
    </Layout>
  )
}

export default IndexPage
