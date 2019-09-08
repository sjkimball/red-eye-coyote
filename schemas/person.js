export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fieldsets: [
    {
      name: 'contact',
      title: 'Contact Info'
    }
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'role'}
          ]
        }
      ]
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      fieldset: 'contact'
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
      fieldset: 'contact'
    },
    {
      title: 'Social Accounts',
      name: 'socialAccounts',
      type: 'array',
      of: [
        {type: 'socialAccount'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
