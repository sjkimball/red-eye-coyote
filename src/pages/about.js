import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"

const AboutPage = ({data}) => {

	const person = data.sanityPerson;
	const bio = person._rawBio;
	const imageData = person.image;
	const name = person.name;
	const office = person.office.address.city;
	const personDoc = person.personDoc;
	const socialAccounts = person.socialAccounts;

	return (
		<Layout page={`about`}>
			<SEO title="About" />
		{/*Add heading for about page containing staff previews once it is necessary*/}
			<Profile
				bio={bio}
				imageData={imageData}
				name={name}
				office={office} 
				personDoc={personDoc}
				socialAccounts={socialAccounts}
				/>
		</Layout>
	)
}

export const query = graphql`
	query Person($name: String = "Sam Kimball"){
		sanityPerson(name: {eq: $name}) {
			_rawBio
			image {
				file {
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
			office {
				address {
					city
				}
			}
			personDoc {
				description
				asset {
					url
				}
			}
			socialAccounts {
				_key
				service {
					name
				}
				username
				url
			}
		}
	}
`

export default AboutPage;
