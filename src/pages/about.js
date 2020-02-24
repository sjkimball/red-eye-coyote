import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"

const AboutPage = ({data}) => {

	const person = data.sanityPerson;
	const bio = person._rawBio;
	const imageData = person.profile_image;
	const first_name = person.first_name;
	const last_name = person.last_name;
	const office = person.office.contact_info.address.city;
	const socialAccounts = person.socialAccounts;

	return (
		<Layout page={`about`}>
			<SEO title="About" />
		{/*Add heading for about page containing staff previews once it is necessary*/}
			<Profile
				bio={bio}
				imageData={imageData}
				first_name={first_name}
				last_name={last_name}
				office={office} 
				socialAccounts={socialAccounts}
				/>
		</Layout>
	)
}

export const query = graphql`
	query Person($name: String = "Sam"){
		sanityPerson(first_name: {eq: $name}) {
			_rawBio
			profile_image {
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
				alt_text
				caption
			}
			first_name
			last_name
			office {
				contact_info {
					address {
					city
					}
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
