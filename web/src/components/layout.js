import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import useCompanyInfo from '../hooks/use-company-info'

import Header from './header'
import Footer from './footer'

import './layout.css'

const Layout = ({children}) => {
  const { companyInfo, staffCount } = useCompanyInfo()
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const location = window.location.pathname
    if (location.includes('/about')) {
      document.body.style.backgroundColor = 'var(--gray5)'
      setDarkMode(true)
    } else {
      document.body.style.backgroundColor = 'white'
    }    
  });

  return (
    <React.Fragment>
      <Header siteTitle={companyInfo.companyName} darkMode={darkMode} staffInfo={staffCount} />
      <main id={`mainContainer`} className={`mainContainer`}>{children}</main>
      <Footer darkMode={darkMode} companyInfo={companyInfo}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
