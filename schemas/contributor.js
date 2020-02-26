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
			first_name: 'name.first_name',
			last_name: 'name.last_name',
			role: 'role',
			media: 'name.profile_image.image'
		},
		prepare(selection) {
		  const {first_name, last_name, role, media} = selection
		  return {
		    title: `${first_name} ${last_name}`,
		    media: media
		  }
		}

	}
}
