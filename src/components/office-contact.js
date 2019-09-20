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
					sizes={{...office.image.file.asset.fluid, aspectRatio: 16 / 9 }}
					className={`header-image`}
				/>				
			</header>
			<section className={`office-contact`}>
				<h2>
					Email
					<a href={`mailto:${office.contact.email}`}>
						<span>
							{office.contact.email}								
						</span>
					</a>
				</h2>

				<h2>
					Phone
					<a href={`tel:1-312-879-9813`}>
						<span>
							{office.contact.phone}
						</span>
					</a>
				</h2>					
			</section>
		</article>

	)
}

export default OfficeContact;