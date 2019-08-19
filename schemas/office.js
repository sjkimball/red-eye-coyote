export default {
  name: 'office',
  title: 'Office',
  type: 'document',
  fields: [
  	{
  		name: 'city',
  		title: 'City',
  		type: 'string',
  	},
  	{
  		name: 'state_province',
  		title: 'State/Province',
  		type: 'string',
  	},
  	{
  		name: 'country',
  		title: 'Country',
  		type: 'string',
  	}
  ],
  hidden: true,
  preview: {
    select: {
      title: 'city',
      subtitle: 'country'
    }
  }
}
