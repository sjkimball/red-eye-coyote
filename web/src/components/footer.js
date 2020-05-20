import React from 'react'

// import usePrimaryOfficeInfo from '../hooks/use-primary-office-info'

import './footer.css'

const Footer = ({darkMode}) => {
  let footerClass

  if (darkMode === true) {
    footerClass = 'mainFooter--dark'
  } else {
    footerClass = 'mainFooter--light'
  }

  return (
    <footer className={`mainFooter ${footerClass}`}>
      {/* <ul className={`social-list`}>
				{links.map((link) => {
					return (
						<li key={link._key}>
							<a href={link.url} target="_blank" rel="noopener noreferrer">{link.service.name}</a>
						</li>
					);
				})}
			</ul> */}
      <small className={`copyright`}>© Sam Kimball</small>
    </footer>
  )
}

export default Footer
