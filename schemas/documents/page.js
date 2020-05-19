export default {
	name: 'page',
	title: 'Pages',
	description: 'Pages to be primary used as content for landing page.',
	type: 'document',
	fieldsets: [
		{
			name: 'pageInfo',
			title: 'Page Information',
			options: {
				collapsible: true,
				collapsed: false,
			}
		},
		{
			name: 'pageContent',
			title: 'Page Content',
			options: {
				collapsible: true,
				collapsed: false
			}
		}
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			fieldset: 'pageInfo'
		},
		{
			name: 'description',
			title: 'Description',
			description: 'This should describe why the page was created.',
			type: 'text',
			rows: 3,
			fieldset: 'pageInfo'
		},
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
			fieldset: 'pageContent'
		},
		{
			name: 'subheading',
			title: 'Subheading',
			type: 'text',
			rows: 3,
			fieldset: 'pageContent'
		},
		{
			name: 'hero',
			title: 'Hero',
			type: 'hero',
			fieldset: 'pageContent'
		},
		{
			name: 'featuredContent',
			title: 'Featured Content',
			type: 'array',
			of: [
				{type: 'featuredWork'},
				{type: 'featuredPosts'}
			],
			fieldset: 'pageContent',
			options: {
				editModal: 'fullscreen',
			}
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			fieldset: 'pageInfo',
			options: {
				source: 'title',
				maxLength: 96
			},
		}
	],
	preview: {
		select: {
			title: 'heading',
			subtitle: 'description',
			media: 'hero.heroImage.image'
		}
	}
}
