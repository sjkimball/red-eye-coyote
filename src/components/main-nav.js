import React from 'react';
import NavLink from './nav-link'

const navStyles = {
	backgroundColor: `var(--gray5transparent)`,
	height: `50vh`,
	width: `100vw`,
	position: `fixed`,
	top: `0`,
	left: `0`,
	zIndex: `10`
}

const MainNav = () => {
	return (
		<nav style={navStyles}>
			<NavLink to="/work">Work</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/blog">Blog</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
		</nav>
	);
}

export default MainNav;