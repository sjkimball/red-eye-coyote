import React from 'react'

import PreviewImage from '../components/preview-image'

import './office-contact.css'

const OfficeContact = ({office}) => {
  const {images, contactInfo, description} = office
  const address = contactInfo.address

  return (
    <article className={`rec-office`}>
      <header className={`rec-office__header`}>
        <h4 className={`rec-office__city`}>{address.city}</h4>
        <time className={`rec-office__time`}>Current time</time>
      </header>
      <section className={`rec-office__info`}>
        <section className={`rec-office__contact`}>
          <a href={`mailto:${contactInfo.email}`} className={`rec-office__email`}>
            {contactInfo.email}
          </a>

          <a href={`tel:1-${contactInfo.phone}`} className={`rec-office__phone`}>+1 {contactInfo.phone}</a>
        </section>
        <address className={`rec-office__address`}>
          {address.street}<br />
          {address.streetSecondary}<br />
          {address.city}, {address.stateProvince} {address.postalCode}<br />
          {address.country}
        </address>
        <p className={`rec-office__description`}>
          {description}
        </p>
      </section>
      <section className={`rec-office__images`}>
        {images.map((image) => {
          return (
            <PreviewImage key={image.asset._id} imageAsset={image} />
          )
        })}
      </section>
    </article>
  )
}

export default OfficeContact
