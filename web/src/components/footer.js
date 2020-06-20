import React from 'react'

// import usePrimaryOfficeInfo from '../hooks/use-primary-office-info'

import './footer.css'

const Footer = ({darkMode}) => {
  let footerClass

  
  // use class toggle instead
  if (darkMode === true) {
    footerClass = 'mainFooter--dark'
  } else {
    footerClass = 'mainFooter--light'
  }

  return (
    <footer className={`mainFooter ${footerClass}`}>
      <ul className={`mainFooter__list`}>
       <li><a href=""><small>GitHub</small></a></li>
       <li><a href=""><small>Behance</small></a></li>
       <li><a href=""><small>Twitter</small></a></li>
       <li><a href=""><small>GitLab</small></a></li>
				{/* {links.map((link) => {
					return (
						<li key={link._key}>
							<a href={link.url} target="_blank" rel="noopener noreferrer">{link.service.name}</a>
						</li>
					);
				})} */}
			</ul>
      {/* copyright could come from company name */}
      <small className={`copyright`}>© Sam Kimball</small>
    </footer>
  )
}

export default Footer
