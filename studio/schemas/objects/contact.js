export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'object',
  fields: [
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone Number',
      description: 'e.g. 123 456 7890',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address'
    }
  ]
}
