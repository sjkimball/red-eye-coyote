export default {
	name: 'address',
	title: 'Address',
	type: 'object',
	fields: [
		{
			name: 'streetNumber',
			title: 'Street Number',
			type: 'number'
		},
		{
			name: 'street',
			title: 'Street',
			type: 'string'
		},
		{
			name: 'streetSecondary',
			title: 'Secondary Street',
			type: 'string',
			description: 'Apartment, Unit, Suite number, etc.'
		},
		{
			name: 'city',
			title: 'City',
			type: 'string',
		},
		{
			name: 'stateProvince',
			title: 'State/Province',
			type: 'string',
		},
		{
			name: 'postalCode',
			title: 'Postal Code',
			type: 'string'
		},
		{
			name: 'country',
			title: 'Country',
			type: 'string',
		}
	]
}
