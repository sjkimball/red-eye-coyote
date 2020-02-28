import React from "react"

import { graphql } from 'gatsby';

import SEO from '../components/seo'
import Layout from '../components/layout'
import OfficeContact from '../components/office-contact'

const ContactPage = ({data}) => {

	const office = data.sanityOffice;

	return(
		<Layout>
			<SEO title="Contact" />
			<header className={`page-header page-header--light`}>
				<h1>Contact</h1>
			</header>
			<OfficeContact office={office} />
		</Layout>
	)
}

export const query = graphql`
	query primaryContact {
	  sanityOffice(contact_info: {address: {city: {eq: "Chicago"}}}) {
	    images {
	      image {
	        asset {
	          _id
	        }
	        crop {
	        	top
	        	bottom
	        	left
	        	right
	        }
	        hotspot {
	        	x
	        	y
	        	height
	        	width
	        }
	      }
	    }
	    contact_info {
	      email
	      phone
	    }
	  }
	}
`

export default ContactPage;
