export default {
	name: 'customImage',
	title: 'Custom Image',
	type: 'object',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'altText',
			title: 'Alternative Text',
			type: 'string',
			validation: Rule => Rule.required().min(10).max(80)
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string'
		}
	]
}
