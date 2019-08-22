import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"


const AboutPage = ({data})  => {

	const bio = data.sanityPerson._rawBio;
	const name = data.sanityPerson.name;
	const imageData = data.sanityPerson.image.asset.fluid;

	return(
		<Layout>
			<SEO title="About" />
			<Profile 
				name={name}
				bio={bio}
				imageData={imageData}
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
	}
}
`

export default AboutPage;
