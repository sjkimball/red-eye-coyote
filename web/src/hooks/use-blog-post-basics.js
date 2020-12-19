import {graphql, useStaticQuery} from 'gatsby'

const useBlogPostBasics = () => {
  const data = useStaticQuery(graphql`
		query allPosts {
			posts: allSanityPost(sort: {fields: publishedAt, order: DESC}) {
		    edges {
		      node {
		      	_id
						slug {
							current
						}
		        title
		        subtitle
		        publishedAt
		        coverImg {
							...imageData
						}
		      }
		    }
		  }
		}
	`)
  return data.posts.edges
}

export default useBlogPostBasics
