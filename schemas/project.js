export default {
	name: 'project',
	title: 'Projects',
	type: 'document',
	initialValue: {
		featured: false
	},
	fields: [
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
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required().min(10).max(30).error('Say more with less.')
		},
		{
			name: 'featured',
			type: 'boolean',
			title: 'Featured'
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
			name: 'coverImg',
			title: 'Cover Image',
			type: 'customImage',
			validation: Rule => Rule.required()
		},
		{
			name: 'project_summary',
			title: 'Project Summary',
			type: 'text',
			rows: 3,
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
			name: 'productImgs',
			title: 'Product Images',
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
		{
			name: 'disciplines',
			title: 'Disciplines',
			description: 'Select all that apply.',
			type: 'array',
			of: [{type: 'string'}],
			options: {
				list: [
					{title: 'Brand Identity', value: 'Brand Identity'},
					{title: 'Environmental Graphics', value: 'Environmental Graphics'},
				]
			}
		},
		{
			name: 'sectors',
			title: 'Sectors',
			description: 'Select all that apply.',
			type: 'array',
			of: [{type: 'string'}],
			options: {
				list: [
					{title: 'Public', value: 'Public'},
					{title: 'Private', value: 'Private'}
				]
			}
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
			name: 'contributors',
			title: 'Contributors',
			type: 'array',
			of: [
				{
					type: 'contributor'
				}
			],
			validation: Rule => Rule.required().error('Add at least one contributor.'),
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'client.client_name',
			media: 'coverImg.image'
		}
	}
}
