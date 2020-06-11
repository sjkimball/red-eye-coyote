import {graphql, useStaticQuery} from 'gatsby'

const useBlogPostBasics = () => {
  const data = useStaticQuery(graphql`
		{
			allSanityPost(sort: {fields: publishedAt, order: DESC}) {
		    edges {
		      node {
		      	_id
		        title
		        subtitle
		        publishedAt
		        coverImg {
							asset {
								_id
								metadata {
									lqip
								}
							}
							crop {
								top
								bottom
								left
								right
							}
							hotspot {
								x
								y
								height
								width
							}
							altText
							caption
						}
		        slug {
		          current
		        }
		      }
		    }
		  }
		}
	`)
  return data.allSanityPost.edges
}

export default useBlogPostBasics
