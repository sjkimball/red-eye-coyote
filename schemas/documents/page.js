export default {
	name: 'page',
	title: 'Pages',
	description: 'Pages to be primary used as content for landing page.',
	type: 'document',
	fieldsets: [
		{name: 'pageContent', title: 'Page Content'}
	],
	fields: [
		{
			name: 'title',
			title: 'Page Title',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Page Description',
			description: 'This should describe why the page was created.',
			type: 'text',
			rows: 3
		},
		{
			name: "heading",
			title: 'Heading',
			type: 'string',
			fieldset: 'pageContent'
			// validation: Rule => Rule.required()
		},
		{
			name: 'subheading',
			title: 'Subheading',
			type: 'text',
			rows: 3,
			fieldset: 'pageContent'
		},
		{
			name: 'heroImage',
			title: 'Hero Image',
			type: 'customImage',
			fieldset: 'pageContent'
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
			],
			fieldset: 'pageContent'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			},
			fieldset: 'pageContent'
		}
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
			media: 'heroImage.image'
		}
	}
}
