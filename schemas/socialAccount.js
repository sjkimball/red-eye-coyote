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
		  name: 'username',
		  title: 'Username/Handle',
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
