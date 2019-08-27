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
}

const socialStyles = {
	color: `var(--accent1)`,
	fontWeight: `500`,
	textDecoration: `none`,
}

const MainNav = () => {
	return (
		<nav style={navStyles}>
			<NavLink to="/work">Work</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/blog">Blog</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<footer style={{ paddingLeft: `8.5px`}}>
				<a href="https://www.behance.net/sjkimball" target="_blank" rel="noopener noreferrer" style={socialStyles} >Behance</a>
				<a href="https://github.com/sjkimball" target="_blank" rel="noopener noreferrer" style={socialStyles} >GitHub</a>
				<a href="https://gitlab.com/sjkimball" target="_blank" rel="noopener noreferrer" style={socialStyles} >GitLab</a>
				<a href="https://twitter.com/sjkimball" target="_blank" rel="noopener noreferrer" style={socialStyles} >Twitter</a>
			</footer>
		</nav>
	);
}

export default MainNav;
