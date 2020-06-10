export default {
  name: 'featuredPeople',
  title: 'Featured People',
  type: 'object',
  fields: [
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'person'
            }
          ],
          options: {
            filter: 'featured == $featured',
            filterParams: {featured: true}
          }
        }
      ],
      validation: Rule => Rule.max(6)
    }
  ],
  preview: {
    select: {
      person0: 'people.0.name',
      person1: 'people.1.name',
      person2: 'people.2.name',
      person3: 'people.3.name'
    },
    prepare: ({person0, person1, person2, person3}) => {
      const people = [person0, person1, person2].filter(Boolean)
      const subtitle = people.length > 0 ? people.join(', ') : ''
      const hasMorePeople = Boolean(person3)
      return {
        title: 'Featured People',
        subtitle: hasMorePeople ? `${subtitle}…` : subtitle
      }
    }
  }
}
