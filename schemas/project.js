export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fieldsets: [
		{name: 'coverImage', title: 'Cover Image'}
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required().min(10).max(30).error('Say more with less.')
		},
		{
			name: 'client',
			title: 'Client',
			type: 'reference',
			validation: Rule => Rule.required().error('Every project needs a client.'),
			to: [
				{type: 'client'}
			]
		},
		{
			name: 'office',
			title: 'Office',
			type: 'reference',
			validation: Rule => Rule.required().error('Office is required'),
			to: [
				{type: 'office'}
			]
		},
		{
			name: 'creators',
			title: 'Creators',
			type: 'array',
			validation: Rule => Rule.required().error('Add at least one contributer.'),
			of: [
				{
					type: 'reference',
					to: [
						{type: 'person'}
					]
				}
			]
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'disciplines',
			title: 'Disciplines',
			type: 'array',
			of: [{type: 'reference', to: {type: 'discipline'}}]
		},
		{
			name: 'sectors',
			title: 'Sectors',
			type: 'array',
			of: [{type: 'reference', to: {type: 'sector'}}]
		},
		{
			name: 'project_summary',
			title: 'Project Summary',
			type: 'text',
			validation: Rule => Rule.required().max(140).error('Try to keep it simple.')
		},
		{
			name: 'project_desc',
			title: 'Project Description',
			type: 'array',
			of: [
				{
					type: 'block'
				}
			]
		},
		{
			name: 'primaryImg',
			title: 'Image',
			type: 'image',
			fieldset: 'coverImage'
		},
		{
			name: 'primaryImg_alt',
			title: 'Alternative Text',
			type: 'string',
			fieldset: 'coverImage'
		},
		{
			name: 'primaryImg_cap',
			title: 'Caption',
			type: 'text',
			fieldset: 'coverImage'
		},
		{
			name: 'supportingImgs',
			title: 'Supporting Images',
			type: 'array',
			of: [
				{
					type: 'customImage'
				}
			],
			options: {
				layout: 'grid'
			}
		},
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'client.client_name'
		}
	}
}