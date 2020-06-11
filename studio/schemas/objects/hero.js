export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'heroImage',
      type: 'figure',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'tagline',
      description: 'Think of this as a subheading',
      type: 'text'
    }
  ],
  preview: {
    select: {
      headline: 'headline',
      tagline: 'tagline',
      media: 'heroImage.image'
    },
    prepare (selection) {
      const {headline, tagline, media} = selection
      return {
        title: `Hero - ${headline}`,
        subtitle: tagline,
        media: media
      }
    }
  }
}
