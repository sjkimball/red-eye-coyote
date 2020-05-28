export default {
  name: 'peoplePreviewGrid',
  title: 'Person Previews',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean'
    },
    {
      name: 'people',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'}
          ]
        }
      ]
    }
  ],
  options: {
    collapsible: false
  }
}