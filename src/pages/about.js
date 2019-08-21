import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
import Profile from "../components/profile"
import SEO from "../components/seo"

export default () => {

	//Will need to be updated to accept ID as a prop
	const data = useStaticQuery(graphql`
		{
			sanityAuthor(_id: {eq: "152444f2-1fdf-4dfd-9e31-9fe3cad1ef05"}) {
				_id
				name
				_rawBio
				image {
					asset {
						fluid {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	`);

	const name = data.sanityAuthor.name;
	const bio = data.sanityAuthor._rawBio;
	const imageData = data.sanityAuthor.image.asset.fluid;

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
};
