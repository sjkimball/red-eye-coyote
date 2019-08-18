export default {
	name: 'customImage',
	title: 'Custom Image',
	type: 'document',
	fields: [
		{
			name: 'media',
			title: 'Image',
			type: 'image',
			options: [
				{
					hotspot: true
				}
			]
		},
		{
			name: 'alt',
			title: 'Alternative Text',
			type: 'string'
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'text'
		}
	]
}