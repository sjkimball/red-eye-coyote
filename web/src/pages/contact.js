import React from 'react'

import {graphql} from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import OfficeContact from '../components/office-contact'

import './pages.css'

const ContactPage = ({data}) => {
	const offices = data.offices.edges
  return (
    <Layout>
      <SEO title='Contact' />
      <article className={`rec-article rec-contact`}>
        <header className={`rec-article__header rec-contact__header`}>
          <h2>Contact</h2>
        </header>				
				<section className={`rec-preview-container`}>
					{offices.map(({node: office}, index) => {
						return (
							<OfficeContact key={index} office={office} />
						)
					})}
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
	query OfficeContact {
	  offices: allSanityOffice(sort: {fields: contactInfo___address___city}) {
	    edges {
	      node {
	      	_id
	        images {
						...imageData
					}
	        contactInfo {
	          address {
	            city
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

export default ContactPage
