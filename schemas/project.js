export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
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
			name: 'project_summary',
			title: 'Project Summary',
			type: 'text'
		},
		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'reference',
			to: [
				{
					type: 'customImage'
				}
			]
		},
	],

	preview: {
		select: {
			title: 'title',
		}
	}
}