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
			type: 'string'
		},
		{
			name: 'client',
			title: 'Client',
			type: 'reference',
			to: [
				{type: 'client'}
			]
		},
		{
			name: 'office',
			title: 'Office',
			type: 'reference',
			to: [
				{type: 'office'}
			]
		},
		{
			name: 'creators',
			title: 'Creators',
			type: 'array',
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
			type: 'text'
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