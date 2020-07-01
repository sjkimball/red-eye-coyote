import S from '@sanity/desk-tool/structure-builder'

import {FaPencilRuler} from 'react-icons/fa'

const portfolio = S.listItem()
  .title('Portfolio')
  .icon(FaPencilRuler)
  .child(
    S.list()
      .title('Portfolio')
      .items([
        S.listItem()
          .title('Projects')
          .schemaType('project')
          .child(
            S.list()
              .title('Projects')
              .items([
                S.listItem()
                  .title('Featured Projects')
                  .schemaType('project')
                  .child(
                    S.documentList('project')
                      .title('Featured Projects')
                      .menuItems(S.documentTypeList('project').getMenuItems())
                      .filter('_type == "project" && featured == true')
                      .child((documentId) =>
                        S.document()
                          .documentId(documentId)
                          .schemaType('project')
                      )
                  ),
                S.documentTypeListItem('project').title('All Projects')
              ])
          ),
        S.listItem()
          .title('Clients')
          .schemaType('client')
          .child(S.documentTypeList('client').title('Clients'))
      ])
  )

export default portfolio
