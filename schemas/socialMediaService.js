export default {
	name: 'socialMediaService',
	title: 'Social Media Service',
	type: 'document',
	hidden: true,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'logo',
			title: 'Logo',
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
			title: 'name',
			media: 'logo'
		}
	}
}