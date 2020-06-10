export default {
  name: 'featuredProjects',
  title: 'Featured Projects',
  type: 'object',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project'
            }
          ],
          options: {
            filter: 'featured == $featured',
            filterParams: {featured: true}
          }
        }
      ],
      validation: Rule => Rule.max(6)
    }
  ],
  preview: {
    select: {
      project0: 'projects.0.title',
      project1: 'projects.1.title',
      project2: 'projects.2.title',
      project3: 'projects.3.title'
    },
    prepare: ({project0, project1, project2, project3}) => {
      const projects = [project0, project1, project2].filter(Boolean)
      const subtitle = projects.length > 0 ? projects.join(', ') : ''
      const hasMoreProjects = Boolean(project3)
      return {
        title: 'Featured Projects',
        subtitle: hasMoreProjects ? `${subtitle}…` : subtitle
      }
    }
  }
}
