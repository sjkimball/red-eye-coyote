import React from 'react'

import Astronaut from './astronaut'

import './landing-page.css'

function isDisabled (item) {
  return !item.disabled;
}
function isFigure (item) {
  return item._type == 'figure'
}

const LandingPage = ({pageContent}) => {
  const {heading, subheading, content} = pageContent
  const figures = content.filter(isDisabled).filter(isFigure)

  return (
    <article id={`rec-landing`} className={`rec-article rec-landing`}>
      <Astronaut imageAsset={figures[0]} imageType={`hero`} />          
      {/* <h2>{heading}</h2> */}
      {/* <h3>{subheading}</h3> */}
    </article>
  )
}

export default LandingPage
