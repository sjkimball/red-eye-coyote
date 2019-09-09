export default {
	name: 'primaryImage',
	title: 'Image',
	type: 'object',
	fields: [
		{
			name: 'img_file',
			title: 'File',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'alt_text',
			title: 'Alternative Text',
			type: 'string'
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string'
		}
	]
}