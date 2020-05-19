export default {
  name: 'office',
  title: 'Offices',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Office Images',
      type: 'array',
      of:[{type: 'customImage'}]
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
      subtitle: 'contactInfo.address.country',
      media: 'images'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media[0].image
      }
    }
  }
}
