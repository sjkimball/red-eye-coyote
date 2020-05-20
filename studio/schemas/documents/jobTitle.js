export default {
  name: 'jobTitle',
  title: 'Job Titles',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    }
  ],
  hidden: true,
  preview: {
    select: {
      title: 'name'
    }
  }
}
