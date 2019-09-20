export default {
	name: 'pageLanding',
	title: 'Landing Page',
	type: 'document',
	fields: [
		{
			name: "heading",
			title: 'Heading',
			type: 'string',
			// validation: Rule => Rule.required()
		},
		{
			name: 'subheading',
			title: 'Subheading',
			type: 'text'
		},
		{
			name: 'heroImage',
			title: 'Hero Image',
			type: 'primaryImage',
			// validation: Rule => Rule.required()
		},
		{
			name: 'workSamples',
			title: 'Work Samples',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'project'
						}
					]
				}
			]
		}
	]
}