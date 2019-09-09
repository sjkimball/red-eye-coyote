import React from "react"

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({data}) => {

	const office = data.sanityOffice;

	const headingStyles = {
		marginBottom: '.5rem'
	}

	const linkStyles = {
		display: 'block',
		marginBottom: '1rem',
		color: 'var(--gray5)',
		textDecoration: 'none'
	}

	const spanStyles = {
		borderBottom: '1px solid var(--gray5)',
		fontWeight: 'var(--text-weight2'
	}

	return(
		<Layout>
			<SEO title="Contact" />
			<article>
				<header>
					<h1>Contact</h1>
					<Img
						fluid={office.image.img_file.asset.fluid}
						alt={office.image.alt_text}
						sizes={{...office.image.img_file.asset.fluid, aspectRatio: 4 / 3 }}
						style={{marginBottom: '1rem'}}
					/>				
				</header>
				<section>
					<h6 style={headingStyles}>Email</h6>
					<a href={`mailto:samuel.j.kimball@gmail.com`} style={linkStyles}>
							<span style={spanStyles}>
								{office.contact.email}								
							</span>
						</a>

					<h6 style={headingStyles}>Phone</h6>
					<a href={`tel:1-312-879-9813`} style={linkStyles}>
						<span style={spanStyles}>
							{office.contact.phone}
						</span>
					</a>					
				</section>
			</article>
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
