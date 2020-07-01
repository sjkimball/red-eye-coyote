export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  initialValue: {
    featured: false,
    coverImg: {
      _type: 'figure',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-6dca2dd407dfdd12e9843ee248fb4a7f8e766774-3705x2084-jpg'
        }
      },
      altText: 'Some alt text'
    }
  },
  fields: [
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3
    },
    {
      name: 'coverImg',
      title: 'Cover Image',
      type: 'figure'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'}
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      author0: 'authors.0.name',
      author1: 'authors.1.name',
      author2: 'authors.2.name',
      author3: 'authors.3.name',
      media: 'coverImg.asset'
    },
    prepare ({
      title,
      author0,
      author1,
      author2,
      author3,
      media
    }) {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title: title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle,
        media: media
      }
    }
  }
}
