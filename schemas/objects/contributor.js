export default {
	name: 'contributor',
	title: 'Contributor',
	type: 'object',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'reference',
			to: {type: 'person'}
		},
		{
			name: 'role',
			title: 'Role',
			type: 'array',
			of: [
				{
					type: 'string'
				}
			],
			options: {
				list: [
					{title: 'Developer', value: 'developer'},
					{title: 'Designer', value: 'designer'},
					{title: 'Product Manager', value: 'productManager'},
				]
			}
		}
	],
	preview: {
		select: {
			firstName: 'name.firstName',
			lastName: 'name.lastName',
			role: 'role',
			media: 'name.profileImg.image'
		},
		prepare(selection) {
		  const {firstName, lastName, role, media} = selection
		  return {
		    title: `${firstName} ${lastName}`,
		    media: media
		  }
		}

	}
}
