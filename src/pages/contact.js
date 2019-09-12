import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import OfficeContact from '../components/office-contact'

const ContactPage = ({data}) => {

	const office = data.sanityOffice;

	return(
		<Layout>
			<SEO title="Contact" />
			<h1>Contact</h1>
			<OfficeContact office={office} />
		</Layout>
	)
}

export const query = graphql`
	query primaryContact {
	  sanityOffice(address: {city: {eq: "Chicago"}}) {
	    image {
	      img_file {
	        asset {
	          fluid {
	            ...GatsbySanityImageFluid
	          }
	        }
	      }
	    }
	    contact {
	      email
	      phone
	    }
	  }
	}
`

export default ContactPage;
