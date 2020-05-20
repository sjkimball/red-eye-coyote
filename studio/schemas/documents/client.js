export default {
  name: 'client',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'client_name',
        maxLength: 96
      }
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      rows: 5
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contact'
    }
  ],

  preview: {
    select: {
      title: 'clientName',
      subtitle: 'contactInfo.address.city'
    }
  }
}
