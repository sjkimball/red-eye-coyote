export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false
  },
  fields: [
    {
      name: 'enabled',
      title: 'Enable?',
      description: 'If disabled, the page heading will default to the heading and subheading.',
      type: 'boolean'
    },
    {
      name: 'heroImage',
      type: 'customImage'
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
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare ({title, disabled}) {
      return {
        title: `Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
