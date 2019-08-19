export default {
	name: 'client',
	title: 'Client',
	type: 'document',
	fieldsets: [
		{name: 'address', title: 'Address'},
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
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'street_number',
			title: 'Street Number',
			type: 'string',
			fieldset: 'address'
		},
		{
			name: 'street_name',
			title: 'Street Name',
			type: 'string',
			fieldset: 'address'
		},
		{
			name: 'street_secondary',
			title: 'Secondary Street Address',
			type: 'string',
			fieldset: 'address'
		},
		{
			name: 'city',
			title: 'City',
			type: 'string',
			fieldset: 'address'
		},
		{
			name: 'state',
			title: 'State',
			type: 'string',
			fieldset: 'address'
		},
		{
			name: 'postal_code',
			title: 'Postal Code',
			type: 'string',
			fieldset: 'address'
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