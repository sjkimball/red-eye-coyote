export default {
  name: 'page',
  title: 'Pages',
  description: 'Pages to be primary used as content for landing page.',
  type: 'document',
  fieldsets: [
    {
      name: 'pageInfo',
      title: 'Page Information',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'featuredContent',
      title: 'Featured Content',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'pageInfo'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'This should describe why the page was created.',
      type: 'text',
      rows: 3,
      fieldset: 'pageInfo'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3
    },
    {
      name: 'content',
      title: 'Content',
      description: 'Add content sections to page. 💀 is a zombie, ✅ is alive.',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'featuredProjects'},
        {type: 'featuredPosts'},
        {type: 'featuredPeople'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}
