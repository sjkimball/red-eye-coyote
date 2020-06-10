export default {
  name: 'projectMember',
  title: 'Project Member',
  type: 'object',
  fields: [
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [
        {type: 'person'}
      ]
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: [
          {title: 'Developer', value: 'developer'},
          {title: 'Designer', value: 'designer'},
          {title: 'Product Manager', value: 'productManager'}
        ]
      }
    }
  ],
  preview: {
    select: {
      person: 'person.name',
      role0: 'role.0',
      role1: 'role.1',
      role2: 'role.2',
      media: 'person.profileImg.image'
    },
    prepare: (selection) => {
      const {person, media} = selection
      return (
        {
          title: person,
          media: media
        }
      )
    }
  }
}
