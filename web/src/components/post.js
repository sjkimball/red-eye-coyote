import React from 'react'

import {Link} from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import CoverImage from '../components/cover-image'
import PreviewImage from '../components/preview-image'

import { format } from 'date-fns'

import './contentLayout.css'

const serializers = {
  container: 'section',
  types: {
    figure: props => (
      <PreviewImage imageAsset={props.node} showCaption />
    )
  }
}

const Post = ({post}) => {
  const {
    authors,
    _rawBody,
    coverImg,
    keywords,
    publishedAt,
    title,
    subtitle
  } = post
  const formattedDate = format(publishedAt, 'MMMM d, YYYY')
  return (
    <article id={`rec-post`} className={`rec-article rec-post`}>
      <header className={`rec-article__header`}>
        <h2>
          {title}
        </h2>
        <h4>{subtitle}</h4>
        <ul className={`rec-post__authors`}>
          {
            authors.map((author)=> {
              return (
                <li>{author.name}</li>
              )
            })
          }
        </ul>
        <time dateTime={publishedAt}>{formattedDate}</time>
        <ul className={`rec-tags`}>
          {keywords.map((keyword, index) => {
            return (
              <li key={index} value={keyword} className={`rec-tag--primary`}>{keyword}</li>
            )
          })}
        </ul>
        <CoverImage imageAsset={coverImg} />
      </header>
      <section id={`rec-post__body`} className="rec-article__body">
        <BlockContent	className={`rec-body__description`}
          blocks={_rawBody}
          serializers={serializers}
        />
      </section>
      <footer id={`rec-post__footer`} className={`rec-article__footer`}>
        <Link to='/blog'>&larr; back to all posts</Link>
      </footer>
    </article>
  )
}

export default Post
