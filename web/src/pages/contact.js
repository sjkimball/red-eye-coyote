import React from 'react'

import {graphql} from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import OfficeContact from '../components/office-contact'

import './pages.css'

const ContactPage = ({data}) => {
  const offices = data.allSanityOffice.edges
  return (
    <Layout>
      <SEO title='Contact' />
      <article id={`rec-contact`} className={`rec-article`}>
        <header id={`rec-contact__header`} className={`rec-article__header`}>
          <h2>Contact</h2>
        </header>
        <section id={`rec-contact__body`} className={`rec-preview-container`}>
          {offices.map(({node: office}) => {
            return (
              <OfficeContact key={office._id} office={office} />
            )
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
						asset {
							_id
							metadata {
								lqip
							}
						}
						altText
						caption
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
