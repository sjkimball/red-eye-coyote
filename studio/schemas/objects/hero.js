import React from 'react'

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'disabled',
      type: 'boolean',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      type: 'figure',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'tagline',
      description: 'Think of this as a subheading',
      type: 'text'
    }
  ],
  preview: {
    select: {
      disabled: 'disabled',
      headline: 'headline',
      tagline: 'tagline',
      media: 'heroImage.image'
    },
    prepare (selection) {
      const {disabled, headline, tagline, media} = selection
      return {
        title: `Hero - ${headline}`,
        subtitle: tagline,
        media: <span style={{fontSize: '1.5rem'}}>{(disabled || disabled == null) ? '🚫' : '✅'}</span>
      }
    }
  }
}
