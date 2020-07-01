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
      <article id={`rec-contact`} className={`rec-article rec-contact`}>
        <header id={`rec-contact__header`} className={`rec-article__header`}>
          <h2>Contact</h2>
        </header>
				{
					offices.length > 1 ?
						<section id={`rec-contact__body`} className={`rec-preview-container`}>
							{offices.map(({node: office}, index) => {
								return (
									<OfficeContact key={index} office={office} />
								)
							})}
        </section>
				: <OfficeContact office={offices[0].node} />
				}
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
