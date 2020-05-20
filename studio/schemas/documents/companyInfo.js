export default {
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string'
    },
    {
      name: 'about',
      title: 'About',
      type: 'text'
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'socialAccounts',
      title: 'Social Accounts',
      type: 'array',
      of: [
        {type: 'socialAccount'}
      ]
    }
  ]
}
