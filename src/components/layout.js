import React from 'react'
import PropTypes from 'prop-types'

import useSiteMetaData from '../hooks/use-site-metadata'

import Header from './header'
import Footer from './footer'

import "./layout.css"

const Layout = ({children}) => {
  const site = useSiteMetaData();

  let location = window.location.pathname;
  let darkMode = false;
  if (location.includes("/about")) {
    document.body.style.backgroundColor = "var(--gray5)";
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "white";
  }
  return (
    <React.Fragment>
      <Header siteTitle={site.title} darkMode={darkMode} />
      <main className={`mainContainer`}>{children}</main>
      <Footer darkMode={darkMode}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
