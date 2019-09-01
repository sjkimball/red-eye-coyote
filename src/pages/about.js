import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"

const AboutPage = ({data}) => {

	const person = data.sanityPerson;
	const bio = person._rawBio;
	const name = person.name;
	const imageData = person.image.asset.fluid;
	const email = person.email;
	const phone = person.phone;
	const github = person.github;
	const twitter = person.twitter;

	return (
		<Layout theme={`dark`}>
			<SEO title="About" />
			<h1>About</h1>
			<Profile 
				name={name}
				bio={bio}
				imageData={imageData}
				email={email}
				phone={phone}
				github={github}
				twitter={twitter}
				/>
		</Layout>
	)
}

export const query = graphql`
	query Person($name: String = "Sam Kimball"){
		sanityPerson(name: {eq: $name}) {
			_rawBio
			image {
				asset {
					fluid {
						...GatsbySanityImageFluid
					}
				}
			}
			name
			email
			phone
			github
			twitter
		}
	}
`

export default AboutPage;
