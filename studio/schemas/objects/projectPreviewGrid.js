export default {
  name: 'projectPreviewGrid',
  title: 'Project Previews',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean'
    },
    {
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'project'}
          ]
        }
      ]
    }
  ],
  options: {
    collapsible: false
  }
}
