import S from '@sanity/desk-tool/structure-builder'

import {FaBullhorn, FaCog} from 'react-icons/fa'

const blog = S.listItem()
  .title('Blog')
  .icon(FaBullhorn)
  .child(
    S.list()
      .title('Blog')
      .items([
        S.listItem()
          .title('Blog Settings')
          .icon(FaCog)
          .child(
            S.editor()
              .schemaType('blogSettings')
              .documentId('blogSettings')
          ),
        S.listItem()
          .title('Posts')
          .child(
            S.list()
              .title('Posts')
              .items([
                S.listItem()
                  .title('Featured Posts')
                  .child(
                    S.documentList()
                      .title('Featured Posts')
                      .filter('_type == "post" && featured == true')
                      .child((documentId) =>
                        S.document()
                          .documentId(documentId)
                          .schemaType('post')
                      )
                  ),
                S.documentTypeListItem('post').title('All Posts')
              ])
          )
      ])
  )

export default blog
