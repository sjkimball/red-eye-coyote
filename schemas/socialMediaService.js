export default {
	name: 'socialMediaService',
	title: 'Social Media Service',
	type: 'document',
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
			type: 'image'
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