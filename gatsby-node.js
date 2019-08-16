/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
		{
			allProjectsJson {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	if (result.error) {
		reporter.panic('There was a problem loading the project.');
		return;
	}

	const projects = result.data.allProjectsJson.edges;

	projects.forEach(({ node: project }) => {
		const slug = project.slug;

		actions.createPage({
			path: `/${slug}`,
			component: require.resolve('./src/templates/project.js'),
			context: { slug }
		});
	});
};
