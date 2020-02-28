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
			type: 'text',
			rows: 3
		},
		{
			name: 'heroImage',
			title: 'Hero Image',
			type: 'customImage',
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
					],
					options: {
						filter: 'featured == $featured',
						filterParams: {
							featured: true
						}
					}
				}
			]
		}
	]
}
