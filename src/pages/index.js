import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
// import Image from "../components/image"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }      
    }
  `);

    const projects = data.allProjectsJson.edges;

  return(
    <Layout>
      <SEO title="Home" />
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const imageData = project.image.childImageSharp.fluid;

        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        );
      })}
    </Layout>
  )
};
