import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"


const AboutPage = ({data})  => {

	const bio = data.sanityPerson._rawBio;
	const name = data.sanityPerson.name;
	const imageData = data.sanityPerson.image.asset.fluid;
	const email = data.sanityPerson.email;
	const phone = data.sanityPerson.phone;
	const github = data.sanityPerson.github;
	const twitter = data.sanityPerson.twitter;

	return(
		<Layout>
			<SEO title="About" />
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
