export default {
	name: 'socialMediaService',
	title: 'Social Media Service',
	type: 'object',
	hidden: true,
	fields: [
		{
			name: 'service',
			title: 'Service',
			type: 'string'
		},
		{
			name: 'logo',
			title: 'Service Logo',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
		  title: 'Link',
		  name: 'url',
		  type: 'url'
		}
	],
	preview: {
		select: {
			title: 'service',
			media: 'logo'
		}
	}
}