import React from 'react';

import PreviewImage from '../components/preview-image';

import './office-contact.css'

const OfficeContact = ({office}) => {
	return (
		<article className={`rec-office`}>
			<header>
				<PreviewImage imageAsset={office.office_image} />
				<h2>Lake Geneva</h2>
				<time>Current time</time>
			</header>
			<section className={`office-info`}>
				<section className={`office-contact`}>
					<a href={`mailto:${office.contact.email}`} className={`office-email`}>
						{office.contact.email}
					</a>

					<a href={`tel:1-312-879-9813`} className={`office-phone`}>
						+1 {office.contact.phone}
					</a>					
				</section>
				<address>
					651 Southwind Drive<br/>
					Unit 103<br/>
					Lake Geneva, WI 53147<br/>
					United States
				</address>
				<p>
					Description of location
				</p>
			</section>
		</article>
	)
}

export default OfficeContact;