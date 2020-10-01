import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlockContent from '@sanity/block-content-to-react'

import ProfilePreview from '../components/profile-preview'

import useProfileBasics from '../hooks/use-profile-basics'
import useCompanyInfo from '../hooks/use-company-info'

import './pages.css'

const serializers = {
  container: 'section'
}

const AboutPage = ({data}) => {
  const companyInfo = useCompanyInfo().companyInfo
  const profiles = useProfileBasics()

  return (
    <Layout>
      <SEO title='About' />
      <article className={`rec-article rec-about`}>
        <header className={`rec-article__header rec-about__header`}>
          <h2>About {companyInfo.companyName}</h2>
          <BlockContent blocks={companyInfo._rawAbout} serializers={serializers} />
        </header>
        <section className={`rec-preview-container`}>
          {profiles.map(({node: profile}) => {
            return (
              <ProfilePreview
                key={profile._id}
                profile={profile}
              />
            )
          })}
        </section>
      </article>
    </Layout>
  )
}

export default AboutPage
