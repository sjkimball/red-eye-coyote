import S from '@sanity/base/structure-builder'

const hiddenTemplateItems = listItem =>
  ![
    'jobTitle',
    'office',
    'page',
    'socialMediaService'
  ].includes(listItem.getId())

export default [
  ...S.defaultInitialValueTemplateItems().filter(hiddenTemplateItems)
]
