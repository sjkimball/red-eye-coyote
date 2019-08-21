import React from "react"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
// import ProjectPreview from "../components/project-preview"
// import Image from "../components/image"
import SEO from "../components/seo"

export default () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allSanityProject {
  //       edges {
  //         node {
  //           _id
  //           title
  //           slug {
  //             current
  //           }
  //           project_summary
  //           primaryImg {
  //             media {
  //               asset {
  //                 fluid {
  //                   ...GatsbySanityImageFluid
  //                 }
  //               }                
  //             }
  //           }
  //         }
  //       }
  //     }      
  //   }
  // `);

    // const projects = data.allSanityProject.edges;

  return(
    <Layout>
      <SEO title="Projects" />
      {/*{projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.project_summary;
        const slug = project.slug.current;
        const imageData = project.primaryImg.media.asset.fluid;
        
        return (
          <ProjectPreview
            key={slug}
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        );
      })}*/}
    </Layout>
  )
};
