export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: {
    mainImage: {
      _type: 'customImage',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-6dca2dd407dfdd12e9843ee248fb4a7f8e766774-3705x2084-jpg'
        }
      },
      alt_text: 'Some alt text'
    }
  },
  fields: [
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'person'}
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage'
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
      author_first: 'author.first_name',
      author_last: 'author.last_name',
      media: 'coverImage.image'
    },
    prepare(selection) {
      const {author_first, author_last, media, title} = selection
      return {
        title: title,
        subtitle: `by ${author_first} ${author_last}`,
        media: media
      }
    }
  }
}
