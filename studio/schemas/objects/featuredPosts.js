export default {
  name: 'featuredPosts',
  title: 'Featured Posts',
  type: 'object',
  fields: [
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'post'
            }
          ],
          options: {
            filter: 'featured == $featured',
            filterParams: {featured: true}
          }
        }
      ],
      validation: Rule => Rule.max(6)
    }
  ],
  preview: {
    select: {
      post0: 'posts.0.title',
      post1: 'posts.1.title',
      post2: 'posts.2.title',
      post3: 'posts.3.title'
    },
    prepare: ({post0, post1, post2, post3}) => {
      const posts = [post0, post1, post2].filter(Boolean)
      const subtitle = posts.length > 0 ? posts.join(', ') : ''
      const hasMorePosts = Boolean(post3)
      return {
        title: 'Featured Posts',
        subtitle: hasMorePosts ? `${subtitle}…` : subtitle
      }
    }
  }
}
