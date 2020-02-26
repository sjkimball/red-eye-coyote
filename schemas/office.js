export default {
  name: 'office',
  title: 'Office',
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
      name: 'contact_info',
      title: 'Contact Information',
      type: 'contact'
    }
  ],
  preview: {
    select: {
      title: 'contact_info.address.city',
      subtitle: 'contact_info.address.country',
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
