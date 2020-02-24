export default {
  name: 'job_title',
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
