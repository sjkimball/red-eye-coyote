export default {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    hotspot: true,
    collapsible: true,
    collapsed: false
  },
  fields: [
    {
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.required().min(10).max(80)
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
