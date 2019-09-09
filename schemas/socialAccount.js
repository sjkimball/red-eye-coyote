export default {
	name: 'socialAccount',
	title: 'Social Account',
	type: 'object',
	fields: [
		{
			name: 'service',
			title: 'Service',
			type: 'reference',
			to: [
				{
					type: 'socialMediaService'
				}
			]
		},
		{
		  title: 'Username/Handle',
		  name: 'username',
		  type: 'string'
		},
		{
		  title: 'Link',
		  name: 'url',
		  type: 'url'
		}
	],
	preview: {
		select: {
			title: 'service.name',
			subtitle: 'username',
			media: 'service.logo'
		}
	}
}