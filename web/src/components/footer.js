import React from 'react'

import './footer.css'

const Footer = ({darkMode, companyInfo}) => {
  let footerClass
  
  // use class toggle instead
  if (darkMode === true) {
    footerClass = 'mainFooter--dark'
  } else {
    footerClass = 'mainFooter--light'
  }
  const companyName = companyInfo.companyName
  const links = companyInfo.socialAccounts

  return (
    <footer className={`mainFooter ${footerClass}`}>
      <ul className={`mainFooter__list`}>
				{links.map((link, index) => {
					return (
						<li key={index}>
							<a href={link.url} target="_blank" rel="noopener noreferrer"><small>{link.service.name}</small></a>
						</li>
					);
				})}
			</ul>
      <small className={`copyright`}>© {companyName}</small>
    </footer>
  )
}

export default Footer
