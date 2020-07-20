import React from 'react'

import {Link} from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import CoverImage from '../components/cover-image'
import PreviewImage from '../components/preview-image'
import AvatarImage from '../components/avatar-image'

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
function getAvatar(author, prefix, index) {
  return (
    <a key={index} href={`${prefix}${author.slug.current}`}><AvatarImage key={index} imageAsset={author.profileImg} /></a>
  )
}
function getName(author, prefix, index) {
  return (
    <a key={index} href={`${prefix}${author.slug.current}`}><span>{author.name}</span></a>
  )
}

function showAuthors(authorArray, prefix) {
  if (authorArray.length == 1) {
    return (
      <>
      {getAvatar(authorArray[0], prefix)}
      <p>By {getName(authorArray[0], prefix)}</p>
      </>
    )
  } else {
    return (
      <>
        <div>{authorArray.map((author)=> {
          return getAvatar(author, prefix)
        })}</div>
        <p>By&nbsp;
          {authorArray.map(author => getName(author, prefix))}
        </p>
      </>
    )
  }
}

const Post = ({post}) => {
  const prefix = '/about/'
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
  const preppedAuthors = showAuthors(authors, prefix)
  return (
    <article id={`rec-post`} className={`rec-article rec-post`}>
      <header className={`rec-article__header`}>
        <h2>
          {title}
        </h2>
        <h4>{subtitle}</h4>
        <div>
          {preppedAuthors}
        </div>
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
