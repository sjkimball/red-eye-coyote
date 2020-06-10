import S from '@sanity/desk-tool/structure-builder'

import {FaUserFriends} from 'react-icons/fa'

const staff = S.listItem()
  .title('Staff')
  .icon(FaUserFriends)
  .child(
    S.list()
      .title('Staff')
      .items([
        S.listItem()
          .title('Staff Members')
        // .icon(FaUserFriends)
          .schemaType('person')
          .child(S.documentTypeList('person').title('Staff Members')),
        S.listItem()
          .title('Job Titles')
          .schemaType('jobTitle')
          .child(S.documentTypeList('jobTitle').title('Job Titles'))
      ])
  )

export default staff
