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
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'last_name',
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
      name: 'job_title',
      title: 'Job Title',
      type: 'reference',
      to: {
          type: 'job_title',
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
      title: 'Contact Info',
      name: 'contact',
      type: 'contact',
    },
    {
      title: 'Social Accounts',
      name: 'socialAccounts',
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
      first_name: 'first_name',
      last_name: 'last_name',
      job_title: 'job_title.name',
      media: 'profileImg.image'
    },
    prepare(selection) {
      const {first_name, last_name, job_title, media} = selection
      return {
        title: `${first_name} ${last_name}`,
        subtitle: job_title,
        media: media
      }
    }
  }
}
