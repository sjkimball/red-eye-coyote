import S from '@sanity/desk-tool/structure-builder'

import {FaBullhorn, FaCog, FaHome, FaRegFileAlt, FaRegBuilding, FaRegIdCard} from 'react-icons/fa'

import portfolio from './src/structure/portfolio'
import staff from './src/structure/staff'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FaCog)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(FaHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(FaRegFileAlt)
        .child(
          S.documentTypeList('page').title('Pages')
        ),
      S.listItem()
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
                .schemaType('post')
                .child(S.documentTypeList('post').title('Posts'))
            ])
        ),
      S.divider(),
      portfolio,
      S.divider(),
      S.listItem()
        .title('Company Information')
        .icon(FaRegIdCard)
        .child(
          S.editor()
            .schemaType('companyInfo')
            .documentId('companyInfo')
        ),
      staff,
      S.listItem()
        .title('Offices')
        .icon(FaRegBuilding)
        .schemaType('office')
        .child(
          S.documentTypeList('office').title('Offices')
        ),
      ...S.documentTypeListItems().filter(listItem =>
        ![
          'blogSettings',
          'client',
          'companyInfo',
          'jobTitle',
          'office',
          'page',
          'person',
          'post',
          'project',
          'siteSettings',
          'socialMediaService'
        ].includes(listItem.getId()))
    ]
    )
