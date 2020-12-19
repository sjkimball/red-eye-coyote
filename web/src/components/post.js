import React from 'react'

import {Link} from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import PreviewImage from '../components/preview-image'

import { format, parseISO } from 'date-fns'

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
    <a key={index} href={`${prefix}${author.slug.current}`}><PreviewImage key={index} imageAsset={author.profileImg} imageType={`avatar`}/></a>
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
          {authorArray.map((author, i) => [
            (i > 0 && i !== authorArray.length - 1) && ", ",
            (i > 0 && ", ") && (i == authorArray.length -1 && " and "),
            getName(author, prefix)
            ])}
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
  const formattedDate = format(parseISO(publishedAt), 'MMMM d, yyyy')
  const preppedAuthors = showAuthors(authors, prefix)
  return (
    <article className={`rec-article rec-post`}>
      <header className={`rec-article__header rec-post__header`}>
        <h2>
          {title}
        </h2>
        <time dateTime={publishedAt}>{formattedDate}</time>
        <h3>{subtitle}</h3>
        <div className={`rec-article__authors`}>
          {preppedAuthors}
        </div>
        <PreviewImage imageAsset={coverImg} imageType={`cover`}/>
      </header>
      <section className={`rec-article__body rec-post__body`}>
        <BlockContent
          className={`rec-post__description`}
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
