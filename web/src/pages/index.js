import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSvg from '../components/astronaut'

import useLandingPage from '../hooks/use-landing-page'

import './pages.css'

const isDisabled = (item) => {
  return !item.disabled;
}
const isFigure = (item) => {
  return item._type == 'figure';
}

const IndexPage = () => {
  const {heading, subheading, content} = useLandingPage();
  const figures = content.filter(isDisabled).filter(isFigure)
  return (
    <Layout>
      <SEO title='Home' />
      <article className={`rec-article rec-landing`}>
        <div className={'rec-landing__headline'}>
          <h2>{heading}</h2>
          <h3>{subheading}</h3>
        </div>
        <HeroSvg className={`rec-hero`} imageAsset={figures[0]} imageType={`hero`} />          
      </article>
    </Layout>
  )
}

export default IndexPage
