import React from 'react'

const HeaderMask = ({siteTitle, darkMode}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" className={`headerMask`}>
			<defs>
				<text id="name" className={`h1__mask`} transform="translate(16 35)">{siteTitle}</text>
				<rect id="bkgd" width="100%" height="48" />
				<mask id="theMask">
					<rect id="black" width="100%" height="48" fill="#000"/>
				</mask>			
			</defs>
			<g id="light" mask={darkMode ? "url(#theMask)" : ''}>
				<use href="#bkgd" fill="#fff"/>
				<use href="#name" />
			</g>			
			<g id="dark" mask={darkMode ? '' : "url(#theMask)"}>
				<use href="#bkgd" fill="var(--gray5)"/>
				<use href="#name" fill="#fff"/>
			</g>
		</svg>
	);
}
export default HeaderMask;
