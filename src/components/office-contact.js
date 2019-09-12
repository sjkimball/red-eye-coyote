import React from 'react';
import Img from 'gatsby-image';
// import BlockContent from '@sanity/block-content-to-react';

import './office-contact.css'

const OfficeContact = ({office}) => {
	return (
		<article className={`rec-office`}>
			<header>
				<Img
					fluid={office.image.img_file.asset.fluid}
					alt={office.image.alt_text}
					sizes={{...office.image.img_file.asset.fluid, aspectRatio: 4 / 3 }}
					style={{marginBottom: '1rem'}}
				/>				
			</header>
			<section>
				<h6>Email</h6>
				<a href={`mailto:${office.contact.email}`}>
					<span>
						{office.contact.email}								
					</span>
				</a>

				<h6>Phone</h6>
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