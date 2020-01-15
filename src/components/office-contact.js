import React from 'react';

import useSanityOptions from "../hooks/use-sanity-options";

import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react';

import './office-contact.css'

const OfficeContact = ({office}) => {
	console.log(office);
	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	return (
		<article className={`rec-office`}>
			<header>
			<img
				src={urlFor(office.office_image.image).url()}
				alt={office.alt_text}
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