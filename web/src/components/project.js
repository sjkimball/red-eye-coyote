import React from 'react'

import {Link} from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import PreviewImage from '../components/preview-image'

import './contentLayout.css'

const serializer = {
  container: 'section',
  types: {
    figure: props => {
      return (
        <PreviewImage imageAsset={props.node} showCaption />
      )
    }
  }
}

const Project = ({project}) => {
  const {
    client,
    sector,
    projectSummary,
    _rawProjectDesc,
    coverImg,
    productImgs,
    office,
    disciplines,
    projectMembers
  } = project
  
  return (
    <article className={`rec-article rec-project`}>
      <header className={`rec-article__header rec-project__header`}>
        <h2>
          {client.name}
        </h2>
        <section className={`rec-project__disciplines`}>
          <h6 hidden>Disciplines</h6>
          <ul className={`rec-tags rec-project__tags`}>
            {disciplines.map((discipline, index) =>
              (index == disciplines.length - 1)
              ?
              <li key={index} value={discipline}>{discipline}</li>
              :
              <li key={index} value={discipline}>{`${discipline}, `}</li>
            )}
          </ul>
        </section>
        <h3>
          {projectSummary}
        </h3>
        <PreviewImage imageAsset={coverImg} imageType={`cover`}/>
      </header>
      <section className={'rec-article__body rec-project__body'}>
        <BlockContent  className={`rec-project__description`} blocks={_rawProjectDesc} serializers={serializer} />
        <section className={`rec-project__gallery`}>
          {productImgs.map((image) => {
            return (
              <PreviewImage
                key={image.asset._id}
                imageAsset={image}
              />
            )
          })}
        </section>
        <section className={`rec-project__metadata`}>
          <section>
            <h6>Client</h6>
            <ul>
              <li>{client.name}</li>
            </ul>
          </section>
          <section>
            <h6>Sector</h6>
            <p>{sector}</p>
          </section>
          <section>
            <h6>Disciplines</h6>
            <ul>
              {disciplines.map((discipline, index) =>
                <li key={index} value={discipline}>{discipline}</li>
              )}
            </ul>
          </section>
          <section>
            <h6>Office</h6>
            <ul>
              <li key={office._id} value={office.contactInfo.address.city}>{office.contactInfo.address.city}</li>
            </ul>
          </section>
          <section>
            <h6>Partner</h6>
            <ul>
              {projectMembers.map((member) =>
                <li key={member._key} value={member.person.name}>{member.person.name}</li>
              )}
            </ul>
          </section>
        </section>
      </section>
      <footer className={`rec-article__footer rec-project__footer`}>
        <Link to='/work'>&larr; Work</Link>
      </footer>
    </article>
  )
}

export default Project
