import React from "react"
import useProjectBasics from "../hooks/use-project-basics"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import SEO from "../components/seo"

export default () => {
  const projects = useProjectBasics();

  return(
    <Layout>
      <SEO title="Work" />
      {projects.map(({ node: project }) => {
        const projID = project._id;
        const title = project.title;
        const clientName = project.client.client_name;
        const clientSlug = project.client.slug.current;
        const projectSlug = project.slug.current;
        const primaryImgData = project.primaryImg.asset.fluid;
        const primaryImgAlt = project.primaryImg_alt
        
        return (
          <ProjectPreview
            key={projID}
            title={title}
            clientName={clientName}
            slug={projectSlug}
            clientSlug={clientSlug}
            primaryImgData={primaryImgData}
            primaryImgAlt={primaryImgAlt}
          />
        );
      })}
    </Layout>
  )
};
