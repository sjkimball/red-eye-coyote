import React from "react"

import { graphql } from 'gatsby';

import SEO from '../components/seo'
import Layout from '../components/layout'
import OfficeContact from '../components/office-contact'

const ContactPage = ({data}) => {
	const offices = data.allSanityOffice.edges;
	return(
		<Layout>
			<SEO title="Contact" />
			<header className={`page-header page-header--light`}>
				<h1>Contact</h1>
			</header>
			{offices.map(({node: office}) => {
				return (
					<OfficeContact key={office._id} office={office} />
				);
			})}
		</Layout>
	)
}

export const query = graphql`
	query OfficeContact {
	  allSanityOffice(sort: {fields: contactInfo___address___city}) {
	    edges {
	      node {
	      	_id
	        images {
	          altText
	          caption
	          image {
	            asset {
	              _id
	            }
	            crop {
	              bottom
	              left
	              right
	              top
	            }
	            hotspot {
	              height
	              width
	              x
	              y
	            }
	          }
	        }
	        contactInfo {
	          address {
	            city
		          streetNumber
		          street
		          streetSecondary
		          stateProvince
		          postalCode
		          country
	          }
	          email
	          phone
	        }
	        description
	      }
	    }
	  }
	}
`

export default ContactPage;
