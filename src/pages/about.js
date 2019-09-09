import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"

const AboutPage = ({data}) => {

	const person = data.sanityPerson;
	const bio = person._rawBio;
	const name = person.name;
	const imageData = person.image;
	const email = person.email;
	const phone = person.phone;

	return (
		<Layout page={`about`}>
			<SEO title="About" />
			<h1 style={{color: `var(--gray1)`}}>About</h1>
			<Profile 
				name={name}
				bio={bio}
				imageData={imageData}
				email={email}
				phone={phone}
				/>
		</Layout>
	)
}

export const query = graphql`
	query Person($name: String = "Sam Kimball"){
		sanityPerson(name: {eq: $name}) {
			_rawBio
			image {
				img_file {
					asset {
						fluid {
							...GatsbySanityImageFluid
						}
					}						
				}
				alt_text
				caption
			}
			name
			contact {
				email
				phone				
			}
		}
	}
`

export default AboutPage;
