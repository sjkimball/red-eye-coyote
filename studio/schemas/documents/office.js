export default {
  name: 'office',
  title: 'Offices',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Office Images',
      type: 'array',
      of: [
        {type: 'figure'}
      ],
      options: {
        layout: 'grid'
      },
      validation: Rule => Rule.length(2)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'contact'
    }
  ],
  preview: {
    select: {
      title: 'contactInfo.address.city',
      subtitle: 'contactInfo.address.stateProvince',
      media: 'images.0.asset'
    },
    prepare (selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: media
      }
    }
  }
}
