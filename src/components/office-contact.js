import React from 'react';

import Img from 'gatsby-image';

import './office-contact.css'

const OfficeContact = ({office}) => {
	return (
		<article className={`rec-office`}>
			<header>
				<Img
					fluid={office.image.file.asset.fluid}
					alt={office.image.alt_text}
					sizes={{...office.image.file.asset.fluid, aspectRatio: 4 / 3 }}
					className={`header-image`}
				/>				
			</header>
			<section>
				<h2>Email</h2>
				<a href={`mailto:${office.contact.email}`}>
					<span>
						{office.contact.email}								
					</span>
				</a>

				<h2>Phone</h2>
				<a href={`tel:1-312-879-9813`}>
					<span>
						{office.contact.phone}
					</span>
				</a>					
			</section>
		</article>

	)
}

export default OfficeContact;