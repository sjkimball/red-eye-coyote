export default {
	name: 'client',
	title: 'Client',
	type: 'document',
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
			name: 'contact_info',
			title: 'Contact Info',
			type: 'contact'
		}
	],

	preview: {
		select: {
			title: 'client_name',
			subtitle: 'contact_info.address.city'
		}
	}
}