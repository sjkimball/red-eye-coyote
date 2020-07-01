import React from 'react'

export default {
  name: 'featuredProjects',
  title: 'Featured Projects',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      type: 'boolean',
      validation: Rule => Rule.required()
    },
    {
      name: 'projects',
      title: 'Projects',
      description: 'Choose from currently featured projects.',
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
      validation: Rule => Rule.max(12)
    }
  ],
  preview: {
    select: {
      disabled: 'disabled',
      project0: 'projects.0.title',
      project1: 'projects.1.title',
      project2: 'projects.2.title',
      project3: 'projects.3.title'
    },
    prepare: ({disabled, project0, project1, project2, project3}) => {
      const projects = [project0, project1, project2].filter(Boolean)
      const subtitle = projects.length > 0 ? projects.join(', ') : ''
      const hasMoreProjects = Boolean(project3)
      return {
        title: `Featured Projects`,
        subtitle: hasMoreProjects ? `${subtitle}…` : subtitle,
        media: <span style={{fontSize: '1.5rem'}}>{(disabled || disabled == null) ? '💀' : '✅'}</span>
      }
    }
  }
}
