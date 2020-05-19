export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec4198043537101c3a54b36',
                  title: 'Sanity Studio',
                  name: 'red-eye-coyote-studio',
                  apiId: 'ee7886a0-c036-4516-be96-6c456bf9c7bf'
                },
                {
                  buildHookId: '5ec419820244c70183681e4f',
                  title: 'Portfolio Website',
                  name: 'red-eye-coyote',
                  apiId: '30ae73c5-72e5-468b-9083-c9f60e9c8752'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjkimball/red-eye-coyote',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://red-eye-coyote.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
