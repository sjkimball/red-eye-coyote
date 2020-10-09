import React, { useEffect } from 'react'
import { gsap } from "gsap"

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSvg from '../components/astronaut'

import useLandingPage from '../hooks/use-landing-page'

import './pages.css'

import {messageTl} from "../animations/hero-animation"

const isDisabled = (item) => {
  return !item.disabled;
}
const isFigure = (item) => {
  return item._type == 'figure';
}

const IndexPage = () => {
  const {heading, subheading, content} = useLandingPage();
  const figures = content.filter(isDisabled).filter(isFigure)

  useEffect(() => {
    messageTl();
  });

  return (
    <Layout>
      <SEO title='Home' />
      <article className={`rec-article rec-landing`}>
        <div className={'rec-landing__headline'}>
          <h2>
            <span className={`rec-headline__line`}>Hey<span className={`rec-headline__punc`}>.&nbsp;</span></span>
             <span className={`rec-headline__line`}>I'm Sam<span className={`rec-headline__punc`}>.</span></span>
          </h2>
          <ul>
            <li>UX/UI Designer</li>
            <li>Front End Dev</li>
            <li>Graphic Artist</li>
          </ul>
        </div>
        <HeroSvg className={`rec-hero`} imageAsset={figures[0]} imageType={`hero`} />          
      </article>
    </Layout>
  )
}

export default IndexPage
