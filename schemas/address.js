export default {
	name: 'address',
	title: 'Address',
	type: 'object',
	fields: [
		{
			name: 'street_number',
			title: 'Street Number',
			type: 'number'
		},
		{
			name: 'street',
			title: 'Street',
			type: 'string'
		},
		{
			name: 'street_secondary',
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
			name: 'state_province',
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