import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

import PreviewImage from '../components/preview-image';

import './office-contact.css'

const OfficeContact = ({office}) => {
	return (
		<article className={`rec-office`}>
			<header>
			<PreviewImage imageAsset={office.office_image} />		
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