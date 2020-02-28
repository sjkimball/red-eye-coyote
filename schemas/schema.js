// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import address from './address'
import blockContent from './blockContent'
import client from './client'
import contact from './contact'
import contributor from './contributor'
import customImage from './customImage'
import jobTitle from './job_title'
import office from './office'
import pageLanding from './pageLanding'
import person from './person'
import personDoc from './personDoc'
import post from './post'
import project from './project'
import siteSettings from './siteSettings'
import socialAccount from './socialAccount'
import socialMediaService from './socialMediaService'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    address,
    blockContent,
    client,
    contact,
    contributor,
    customImage,
    jobTitle,
    office,
    pageLanding,
    person,
    personDoc,
    post,
    project,
    siteSettings,
    socialAccount,
    socialMediaService,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
