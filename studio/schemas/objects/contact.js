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
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      description: 'e.g. 123 456 7890',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: Rule => Rule.required().error('Office must have an address.')
    }
  ]
}
