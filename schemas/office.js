export default {
  name: 'office',
  title: 'Office',
  type: 'object',
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
  preview: {
    select: {
      title: 'city',
      subtitle: 'country'
    }
  }
}
