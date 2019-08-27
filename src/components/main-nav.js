import React from 'react';
import NavLink from './nav-link'

const navStyles = {
	backgroundColor: `var(--gray5transparent)`,
	height: `100vh`,
	width: `100vw`,
	paddingTop: `100px`,
	paddingRight: `1.0875rem`,
	paddingLeft: `1.0875rem`,
	position: `fixed`,
	top: `0`,
	left: `0`,
	zIndex: `99`,
	transition: `all .5s`
}

const MainNav = () => {
	return (
		<nav style={navStyles}>
			<NavLink to="/work">Work</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/blog">Blog</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<footer>
				<a href="https://www.behance.net/sjkimball">Behance</a>
			</footer>
		</nav>
	);
}

export default MainNav;
