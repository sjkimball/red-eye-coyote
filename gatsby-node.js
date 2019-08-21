/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
		{
			allSanityProject {
				edges {
					node {
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (result.error) {
		reporter.panic('There was a problem loading the project.');
		return;
	}

	const projects = result.data.allSanityProject.edges;

	projects.forEach(({ node: project }) => {

		actions.createPage({
			path: `/${project.slug.current}`,
			component: require.resolve('./src/templates/project.js'),
			context: { 
					slug: project.slug.current
				}
		});
	});
};
