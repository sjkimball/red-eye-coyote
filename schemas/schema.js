// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import client from './client'
import customImage from './customImage'
import discipline from './discipline'
import office from './office'
import person from './person'
import post from './post'
import project from './project'
import role from './role'
import sector from './sector'
import siteSettings from './siteSettings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    category,
    client,
    customImage,
    discipline,
    office,
    person,
    post,
    project,
    role,
    sector,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
  ])
})
