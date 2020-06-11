import React from 'react'

import {Link} from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import CoverImage from '../components/cover-image'
import PreviewImage from '../components/preview-image'

import './project.css'

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
    title,
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
    <article id={`rec-project`} className={`project`}>
      <header className={`project-header`}>
        <h2>
          {title}
        </h2>
        <section className='project-disciplines'>
          <h6 hidden>Disciplines</h6>
          <ul>
            {disciplines.map((discipline, index) =>
              <li key={index} value={discipline}>{discipline}</li>
            )}
          </ul>
        </section>
        <h4>
          {projectSummary}
        </h4>
        <CoverImage imageAsset={coverImg} />
      </header>
      <section className={'project-body'}>
        <BlockContent blocks={_rawProjectDesc} serializers={serializer} className={`project-description`} />
        <section className={`project-gallery`}>
          {productImgs.map((image) => {
            return (
              <PreviewImage
                key={image.asset._id}
                imageAsset={image}
              />
            )
          })}
        </section>
        <section className={`project-metadata`}>
          <section className="metadata-client">
            <h6>Client</h6>
            <ul>
              <li>{client.name}</li>
            </ul>
          </section>
          <section className="metadata-sector">
            <h6>Sector</h6>
            <p>{sector}</p>
          </section>
          <section className="metadata-disciplines">
            <h6>Disciplines</h6>
            <ul>
              {disciplines.map((discipline, index) =>
                <li key={index} value={discipline}>{discipline}</li>
              )}
            </ul>
          </section>
          <section className="metadata-office">
            <h6>Office</h6>
            <ul>
              <li key={office._id} value={office.contactInfo.address.city}>{office.contactInfo.address.city}</li>
            </ul>
          </section>
          <section className="metadata-partners">
            <h6>Partner</h6>
            <ul>
              {projectMembers.map((member) =>
                <li key={member._key} value={member.person.name}>{member.person.name}</li>
              )}
            </ul>
          </section>
        </section>
      </section>
      <footer className={`project-footer`}>
        <Link to='/work'>&larr; Work</Link>
      </footer>
    </article>
  )
}

export default Project
