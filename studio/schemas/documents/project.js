import client from 'part:@sanity/base/client'

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  initialValue: async () => ({
    featured: false,
    sector: 'private',
    projectMembers: await client.fetch(`//groq
      *[_type == "person" && name match "Sam"]{
        "_type": "projectMember",
        "person": {
          "_ref": _id,
          "_type": "reference"
        }
      }
    `),
    coverImg: {
      _type: 'figure',
      asset: {
        _type: 'reference',
        _ref: 'image-316e2b9591cd93c7c36db93a570410bdd5ba7ad9-2400x1344-jpg'
      },
      altText: 'This is placeholder alt text',
      caption: 'This is a placeholer caption'
    }
  }),
  fields: [
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
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
      validation: Rule => Rule.required().min(80).max(140).error('Summaries need to be between 80 and 140 characters long.')
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
        layout: 'grid'
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
          {title: 'User Interface', value: 'User Interface'},
          {title: 'User Experience', value: 'User Experience'},
          {title: 'Responsive Web App', value: 'Responsive Web App'},
          {title: 'Apparel', value: 'Apparel'},
          {title: 'Illustration', value: 'Illustration'},
          {title: 'UI Refresh', value: 'UI Refresh'}
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
