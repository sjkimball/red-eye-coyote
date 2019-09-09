export default {
	name: 'client',
	title: 'Client',
	type: 'document',
	fieldsets: [
		{name: 'contact', title: 'Contact Info'}
	],
	fields: [
		{
			name: 'client_name',
			title: 'Client Name',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'client_name',
				maxLength: 96
			}
		},
		{
			name: 'address',
			title: 'Address',
			type: 'address'
		},
		{
			name: 'website',
			title: 'Website',
			type: 'url',
			fieldset: 'contact'
		},
		{
			name: 'phone_number',
			title: 'Phone',
			type: 'string',
			fieldset: 'contact'
		},
	],

	preview: {
		select: {
			title: 'client_name',
		}
	}
}