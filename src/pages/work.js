import React from "react"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import SEO from "../components/seo"

import useProjectBasics from "../hooks/use-project-basics"

export default () => {
  const projects = useProjectBasics();

  return(
    <Layout>
      <SEO title="Work" />
      <header className={`page-header`}>
        <h1>Work</h1>
        <p>Take a look.</p>        
      </header>
      {projects.map(({ node: project }) => {
        const projID = project._id;
        const title = project.title;
        const clientName = project.client.client_name;
        const clientSlug = project.client.slug.current;
        const projectSlug = project.slug.current;
        const coverImg = project.coverImg;
        
        return (
          <ProjectPreview
            key={projID}
            title={title}
            clientName={clientName}
            slug={projectSlug}
            clientSlug={clientSlug}
            coverImg={coverImg}
          />
        );
      })}
    </Layout>
  )
};
