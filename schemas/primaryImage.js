export default {
	name: 'primaryImage',
	title: 'Image',
	type: 'object',
	fields: [
		{
			name: 'file',
			title: 'File',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'alt_text',
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