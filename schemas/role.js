export default {
  name: 'role',
  title: 'Job Role',
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
