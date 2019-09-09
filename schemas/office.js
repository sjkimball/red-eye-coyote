export default {
  name: 'office',
  title: 'Office',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Office Image',
      type: 'primaryImage'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address'
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'socialAccount'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'address.city',
      subtitle: 'address.country'
    }
  }
}
