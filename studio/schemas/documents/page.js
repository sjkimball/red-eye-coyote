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
      name: 'hero',
      type: 'hero'
    },
    {
      name: 'projects',
      title: 'Featured Projects',
      type: 'projectPreviewGrid',
      fieldset: 'featuredContent'
    },
    {
      name: 'people',
      title: 'Featured People',
      type: 'peoplePreviewGrid',
      fieldset: 'featuredContent'
    },
    {
      name: 'posts',
      title: 'Featured Posts',
      type: 'postPreviewGrid',
      fieldset: 'featuredContent'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}
