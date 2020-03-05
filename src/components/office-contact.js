import React from 'react';

import PreviewImage from '../components/preview-image';

import './office-contact.css'

const OfficeContact = ({office}) => {
	const { images, contactInfo, description } = office;
	const address = contactInfo.address;

	return (
		<article className={`rec-office`}>
			<header className={`rec-office__header`}>
				<h2 className={`rec-office__city`}>{address.city}</h2>
				<time className={`rec-office__time`}>Current time</time>
				<section className={`rec-office__images`}>
					{images.map((image) => {
						return (
							<PreviewImage key={image.image.asset._id} imageAsset={image} />
						)
					})}
				</section>
			</header>
			<section className={`rec-office__info`}>
				<section className={`rec-office__contact`}>
					<a href={`mailto:${contactInfo.email}`} className={`rec-office__email`}>
						{contactInfo.email}
					</a>

					<a href={`tel:1-312-879-9813`} className={`rec-office__phone`}>
						+1 {contactInfo.phone}
					</a>
				</section>
				<address className={`rec-office__address`}>
					{address.streetNumber} {address.street}<br/>
					{address.streetSecondary}<br/>
					{address.city}, {address.state} {address.postalCode}<br/>
					{address.country}
				</address>
				<p className={`rec-office__description`}>
					{description}
				</p>
			</section>
		</article>
	)
}

export default OfficeContact;
