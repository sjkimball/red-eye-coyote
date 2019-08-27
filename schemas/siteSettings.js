export default {
	name: "blogSettings",
	type: "document",
	title: "Blog Settings",
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
			description: "Decscribe the blog for search engines and social media"
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
		},
		{
			name: "author",
			type: "reference",
			title: "Author",
			to: [{type: "person"}]
		}
	]
}