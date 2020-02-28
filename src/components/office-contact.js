import React from 'react';

import PreviewImage from '../components/preview-image';

import './office-contact.css'

const OfficeContact = ({office}) => {
	const { images, contactInfo, description } = office;
	const address = contactInfo.address;

	return (
		<article className={`rec-office`}>
			<header>
				{images.map((image) => {
					return (
						<PreviewImage key={image.image.asset._id} imageAsset={image} />
					)
				})}
				<h2>{address.city}</h2>
				<time>Current time</time>
			</header>
			<section className={`office-info`}>
				<section className={`office-contact`}>
					<a href={`mailto:${contactInfo.email}`} className={`office-email`}>
						{contactInfo.email}
					</a>

					<a href={`tel:1-312-879-9813`} className={`office-phone`}>
						+1 {contactInfo.phone}
					</a>
				</section>
				<address>
					{address.street_number} {address.street}<br/>
					{address.street_secondary}<br/>
					{address.city}, {address.state} {address.postalCode}<br/>
					{address.country}
				</address>
				<p>
					{description}
				</p>
			</section>
		</article>
	)
}

export default OfficeContact;
