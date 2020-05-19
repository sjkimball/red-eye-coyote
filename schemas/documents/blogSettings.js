export default {
	name: "blogSettings",
	type: "document",
	title: "Blog Settings",
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title"
		},
		{
			name: "subtitle",
			type: "string",
			title: "Subtitle"
		},
		{
			name: "description",
			type: "text",
			title: "Description",
			description: "Describe the blog for search engines and social media"
		},
		{
			name: "keywords",
			type: "array",
			title: "Keywords",
			description: "Add keywords that describe your blog",
			of: [{type: "string"}],
			options: {
				layout: "tags"
			}
		}
	]
}
