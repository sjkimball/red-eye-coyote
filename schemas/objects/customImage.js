export default {
	name: 'customImage',
	title: 'Custom Image',
	type: 'object',
	fields: [
		{
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
				collapsible: true,
				collapsed: false
			}
		},
		{
			name: 'altText',
			title: 'Alternative Text',
			type: 'string',
			options: {
				isHighlighted: true
			},
			validation: Rule => Rule.required().min(10).max(80)
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string',
			options: {
				isHighlighted: true,
			}
		}
	]
}
