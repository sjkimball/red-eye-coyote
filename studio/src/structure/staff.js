import S from '@sanity/desk-tool/structure-builder'

import {FaUserFriends} from 'react-icons/fa'

const staff = S.listItem()
  .title('Staff')
  .icon(FaUserFriends)
  .child(
    S.list()
      .title('Staff')
      .items([
        S.documentTypeListItem('person')
          .title('Staff Members'),
        S.documentTypeListItem('jobTitle')
          .title('Job Titles')
      ])
  )

export default staff
