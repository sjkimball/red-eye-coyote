import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontPage from '../components/front-page'

const IndexPage = ({data}) => {

	const pageContent = data.sanityPageLanding;

	return(
		<Layout>
			<SEO title="Home" />
			<FrontPage pageContent={pageContent}/>
		</Layout>
	);
}

export const query = graphql`
	query frontPage {
		sanityPageLanding(heading: {eq: "Hello Nashville."}) {
				heading
				subheading
				heroImage {
					image {
						...imageData
					}
					altText
					caption
				}
				workSamples {
					_id
					title
					client {
						slug {
							current
						}
					}
					slug {
						current
					}
					coverImg {
						image {
							...imageData
						}
						altText
					}
				}
			}
	}
	fragment imageData on SanityImage {
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
`

export default IndexPage;
