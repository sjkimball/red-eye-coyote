import React from 'react'
import PropTypes from 'prop-types'

import useCompanyInfo from '../hooks/use-company-info'

import Header from './header'
import Footer from './footer'

import './layout.css'

const Layout = ({children}) => {
  const { companyInfo, staffCount } = useCompanyInfo()

  let location = window.location.pathname
  let darkMode = false
  if (location.includes('/about')) {
    document.body.style.backgroundColor = 'var(--gray5)'
    darkMode = true
  } else {
    document.body.style.backgroundColor = 'white'
  }
  return (
    <React.Fragment>
      <Header siteTitle={companyInfo.companyName} darkMode={darkMode} staffInfo={staffCount} />
      <main className={`mainContainer`}>{children}</main>
      <Footer darkMode={darkMode} companyInfo={companyInfo}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
