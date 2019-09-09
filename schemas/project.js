export default {
	name: 'project',
	title: 'Project',
	type: 'document',
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
			of: [
				{
					type: 'reference',
					to: {
						type: 'discipline'
					}
				}
			]
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
			validation: Rule => Rule.required().min(50).max(140).error('Try to keep it simple.')
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
			name: 'coverImg',
			title: 'Cover Image',
			type: 'primaryImage'
		},
		{
			name: 'supportingImgs',
			title: 'Supporting Images',
			type: 'array',
			of: [
				{
					type: 'primaryImage'
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
			subtitle: 'client.client_name',
			media: 'coverImg.img_file'
		}
	}
}