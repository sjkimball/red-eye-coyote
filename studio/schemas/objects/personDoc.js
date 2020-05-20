export default {
  name: 'personDoc',
  title: 'Document',
  type: 'file',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'person'
      }
    }
  ]
}
