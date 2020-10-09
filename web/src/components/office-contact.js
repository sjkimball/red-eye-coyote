import React from 'react'

// import { format, utcToZonedTime } from 'date-fns-tz'

import PreviewImage from '../components/preview-image'

import './office-contact.css'

function SecondaryAddress(props) {
  if (!props.address.streetSecondary) {
    return null;
  }
  return (
    <>
      {props.address.streetSecondary}<br />
    </>
  )
}


const OfficeContact = ({office}) => {
  const {images, contactInfo, description} = office
  const address = contactInfo.address

  return (
    <article className={`rec-office`}>
      <header className={`rec-office__header`}>
        <h4>{address.city}</h4>
        {/* <time>Current time</time> */}
      </header>
      <section className={`rec-office__info`}>
        <section>
          <a href={`mailto:${contactInfo.email}`} className={`rec-office__email`}>
            {contactInfo.email}
          </a>

          <a href={`tel:1-${contactInfo.phone}`} className={`rec-office__phone`}>+1 {contactInfo.phone}</a>
        </section>
        <address>
          {address.street}<br />
          <SecondaryAddress address={address} />
          {address.city}, {address.stateProvince} {address.postalCode}<br />
          {address.country}
        </address>
        <p>
          {description}
        </p>
      </section>
      <section className={`rec-office__images`}>
        {
          images.map((image) => {
            return (
              <PreviewImage key={image.asset._id} imageAsset={image} />
            )
          })
        }
      </section>
    </article>
  )
}

export default OfficeContact
