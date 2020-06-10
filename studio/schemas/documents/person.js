export default {
  name: 'person',
  title: 'People',
  type: 'document',
  initialValue: {
    featured: false
  },
  fields: [
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'customImage'
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'reference',
      to: {
        type: 'jobTitle'
      }
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
      type: 'blockContent',
      validation: Rule => Rule.required().error('Bio is a required field')
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contact'
    },
    {
      name: 'socialAccounts',
      title: 'Social Accounts',
      type: 'array',
      of: [
        {type: 'socialAccount'}
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      description: `Click the 'Generate' button to create a slug based on the person's name.`,
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required().error('Looks like you may have forgotten to generate a slug.:(')
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'jobTitle.name',
      media: 'profileImg.image'
    }
  }
}
