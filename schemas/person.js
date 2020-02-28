export default {
  name: 'person',
  title: 'People',
  type: 'document',
  fieldsets: [
    {
      name: 'contact',
      title: 'Contact Info'
    }
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'customImage',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'reference',
      to: {
          type: 'jobTitle',
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
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ],
      validation: Rule => Rule.required().error('Bio is a required field')
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contact',
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
      description: `Click the 'Generate' button to create a slug based on the person's first and last names.`,
      type: 'slug',
      options: {
        source: doc => `${doc.first_name}-${doc.last_name}`,
        maxLength: 96
      },
      validation: Rule => Rule.required().error('Looks like you may have forgotten to generate a slug.:(')
    }
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      jobTitle: 'jobTitle.name',
      media: 'profileImg.image'
    },
    prepare(selection) {
      const {firstName, lastName, jobTitle, media} = selection
      return {
        title: `${firstName} ${lastName}`,
        subtitle: jobTitle,
        media: media
      }
    }
  }
}
