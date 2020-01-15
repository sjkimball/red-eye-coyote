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
	        alt_text
	        caption
	      }
	      workSamples {
	      	_id
	        title
	        coverImg {
	          image {
	            ...imageData
	          }
	          alt_text
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
