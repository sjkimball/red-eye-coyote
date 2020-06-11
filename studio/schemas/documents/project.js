import client from 'part:@sanity/base/client'

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  initialValue: async () => ({
    featured: false,
    sectors: 'private',
    projectMembers: await client.fetch(`//groq
      *[_type == "person" && name match "Sam"]{
        "_type": "projectMember",
        "person": {
          "_ref": _id,
          "_type": "reference"
        }
      }
    `)
  }),
  fields: [
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured'
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      validation: Rule => Rule.required().error('Every project needs a client.'),
      to: [
        {type: 'client'}
      ]
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(30).error('Say more with less.')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'office',
      title: 'Office',
      type: 'reference',
      validation: Rule => Rule.required().error('Office is required'),
      to: [
        {type: 'office'}
      ]
    },
    {
      name: 'coverImg',
      title: 'Cover Image',
      type: 'figure',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectSummary',
      title: 'Project Summary',
      description: 'Overview of the project.',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(50).max(140).error('Try to keep it simple.')
    },
    {
      name: 'projectDesc',
      title: 'Project Description',
      description: 'Detailed description of the project.',
      type: 'blockContent'
    },
    {
      name: 'productImgs',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'figure'
        }
      ],
      options: {
        // layout: 'grid'
      }
    },
    {
      name: 'disciplines',
      title: 'Disciplines',
      description: 'Select all that apply.',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Brand Identity', value: 'Brand Identity'},
          {title: 'Environmental Graphics', value: 'Environmental Graphics'}
        ]
      }
    },
    {
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          {title: 'Private', value: 'private'},
          {title: 'Public', value: 'public'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'projectMembers',
      title: 'Project Members',
      type: 'array',
      of: [
        {type: 'projectMember'}
      ],
      validation: Rule => Rule.required().error('Add at least one contributor.')
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client.name',
      media: 'coverImg.asset'
    }
  }
}
