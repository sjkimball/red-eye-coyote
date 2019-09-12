import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import './footer.css'

const Footer = (props) => {
	const data = useStaticQuery(graphql`
		query primaryOfficeInfo {
		  sanityOffice(address: {city: {eq: "Chicago"}}){
		    address {
		      city
		      state_province
		      country
		    }
		    links {
		    	_key
		      service {
		        name
		      }
		      username
		      url
		    }
		  }
		}
	`)

	const office = data.sanityOffice;
	const socialList = office.links;

	return (
		<footer className={`footer`}>
			<ul className={`social-list`}>
				{socialList.map((link) => {
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