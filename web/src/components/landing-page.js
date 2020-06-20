import React from 'react'

// import {Link} from 'gatsby'

import CoverImage from '../components/cover-image'
// import PreviewImage from '../components/preview-image'

import './landing-page.css'

const LandingPage = ({pageContent}) => {
  const {heading, subheading} = pageContent

  return (
    <article id={`rec-landing`} className={`rec-article`}>
      <section className='featured'>
        <header id={`rec-landing__header`} className={`rec-article__header`}>
          {/* <CoverImage id={`hero`} imageAsset={heroImage} showCaption /> */}
          <h2>{heading}</h2>
          <h4>{subheading}</h4>
        </header>
      </section>
      <section>
        {/* <section className='work-samples preview-container'>
          {workSamples.map((sample) => {
            const key = sample._id
            const title = sample.title
            const coverImg = sample.coverImg
            const clientSlug = sample.client.slug.current
            const slug = sample.slug.current

            return (
              <Link key={key}to={`/work/${clientSlug}/${slug}`}>
                <PreviewImage imageAsset={coverImg} />
                <h5>
                  {title}
                </h5>
              </Link>
            )
          })}
        </section> */}
      </section>
    </article>
  )
}

export default LandingPage
