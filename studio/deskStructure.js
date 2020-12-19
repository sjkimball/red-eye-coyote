import S from '@sanity/desk-tool/structure-builder'

import {FaCog, FaHome, FaRegFileAlt, FaRegBuilding, FaRegIdCard} from 'react-icons/fa'

import portfolio from './src/structure/portfolio'
import blog from './src/structure/blog'
import staff from './src/structure/staff'

const hiddenDocTypes = listItem =>
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
  ].includes(listItem.getId())

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
      blog,
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
      S.documentTypeListItem('office')
        .title('Offices')
        .icon(FaRegBuilding),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
