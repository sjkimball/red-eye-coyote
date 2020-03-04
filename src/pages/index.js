import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import FrontPage from '../components/front-page'

const IndexPage = ({data}) => {

	const pageContent = data.sanityPage;

	return(
		<Layout>
			<SEO title="Home" />
			<FrontPage pageContent={pageContent}/>
		</Layout>
	);
}

export const query = graphql`
query LandingPage {
  sanityPage(title: {eq: "First landing page"}) {
    heading
    subheading
    heroImage {
      ...imageData
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
        ...imageData
      }
    }
  }
}

fragment imageData on SanityCustomImage {
  altText
  caption
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
}`

export default IndexPage;
