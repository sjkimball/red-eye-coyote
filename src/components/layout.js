import React from 'react'
import PropTypes from 'prop-types'

import useSiteMetaData from '../hooks/use-site-metadata'

import Header from './header'
import Footer from './footer'

import "./layout.css"

const Layout = ({children, page}) => {
  const site = useSiteMetaData();

  let layoutClass = 'layout';
  if (page === 'about') {
    layoutClass = 'layout layout--dark'
  }
  return (
    <React.Fragment>
      <Header siteTitle={site.title} page={page} />
      <div className={layoutClass}>
        <main className={`mainContainer`}>{children}</main>
      </div>
      <Footer page={page}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
