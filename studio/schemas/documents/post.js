export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: {
    featured: false,
    coverImg: {
      _type: 'figure',
      asset: {
        _type: 'reference',
        _ref: 'image-316e2b9591cd93c7c36db93a570410bdd5ba7ad9-2400x1344-jpg'
      },
      altText: 'This is placeholder alt text',
      caption: 'This is a placeholer caption'
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
      validation: Rule => Rule.min(1).error('Post must have at least one author.')
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
