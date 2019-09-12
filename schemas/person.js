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
      type: 'primaryImage',
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
      name: 'office',
      title: 'Office',
      type: 'reference',
      to: [
        {
          type: 'office'
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
      title: 'Contact Info',
      name: 'contact',
      type: 'contact',
    },
    {
      title: 'Social Accounts',
      name: 'socialAccounts',
      type: 'array',
      of: [
        {type: 'socialAccount'}
      ]
    },
    {
      name: 'personDoc',
      title: 'Related Doc',
      type: 'personDoc'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image.img_file'
    }
  }
}
