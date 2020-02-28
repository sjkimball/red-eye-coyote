export default {
  name: 'jobTitle',
  title: 'Job Titles',
  type: 'document',
  fields: [
  	{
  		name: 'name',
  		title: 'Name',
  		type: 'string'
  	}
  ],
  hidden: true,
  preview: {
    select: {
      title: 'name',
    }
  }
}
