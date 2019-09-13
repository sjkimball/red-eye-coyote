import React from 'react'

import usePrimaryOfficeInfo from '../hooks/use-primary-office-info'

import './footer.css'

const Footer = ({ page }) => {

	const { links } = usePrimaryOfficeInfo();

	let footerClass;

	if (page === 'about') {
	  footerClass = 'footer--dark';
	} else {
	  footerClass = 'footer--light'
	}

	return (
		<footer className={`footer ${footerClass}`}>
			<ul className={`social-list`}>
				{links.map((link) => {
					return (
						<li key={link._key}>
							<a href={link.url} target="_blank" rel="noopener noreferrer">{link.service.name}</a>
						</li>
					);
				})}
			</ul>
			<small className={`copyright`}>© Sam Kimball</small>	
		</footer>
	)
}

export default Footer;