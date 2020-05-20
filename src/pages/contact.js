import React from "react"

import { graphql } from 'gatsby';

import SEO from '../components/seo'
import Layout from '../components/layout'
import OfficeContact from '../components/office-contact'

import './pages.css'

const ContactPage = ({data}) => {
	const offices = data.allSanityOffice.edges;
	return(
		<Layout>
			<SEO title="Contact" />
			<article className={`contact`}>
				<header className={`page-header page-header--light contact__header`}>
					<h1>Contact</h1>
				</header>
				<section className={`contact__offices`}>
					{offices.map(({node: office}) => {
						return (
							<OfficeContact key={office._id} office={office} />
						);
					})}
				</section>
			</article>
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
	              metadata {
	              	lqip
	              }
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
