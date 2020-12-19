import {FaUserTie} from 'react-icons/fa'

export default {
  name: 'client',
  title: 'Client',
  icon: FaUserTie,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
      title: 'Contact Information',
      type: 'contact'
    }
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'contactInfo.address.city'
    }
  }
}
