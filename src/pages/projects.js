import React from "react"
// import { Link } from "gatsby"
import useProjectBasics from "../hooks/use-project-basics"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import SEO from "../components/seo"

export default () => {
  const projects = useProjectBasics();

  return(
    <Layout>
      <SEO title="Projects" />
      {projects.map(({ node: project }) => {
        const title = project.title;
        const clientName = project.client.client_name;
        const slug = project.slug.current;
        const primaryImgData = project.primaryImg.asset.fluid;
        const primaryImgAlt = project.primaryImg_alt
        
        return (
          <ProjectPreview
            key={slug}
            title={title}
            clientName={clientName}
            slug={slug.current}
            primaryImgData={primaryImgData}
            primaryImgAlt={primaryImgAlt}
          />
        );
      })}
    </Layout>
  )
};
