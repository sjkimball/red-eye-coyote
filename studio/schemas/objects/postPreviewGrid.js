export default {
  name: 'postPreviewGrid',
  title: 'Post Previews',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean'
    },
    {
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'post'}
          ]
        }
      ]
    }
  ],
  options: {
    collapsible: false
  }
}