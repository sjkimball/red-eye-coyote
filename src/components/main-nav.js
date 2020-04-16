import React from 'react';

import NavLink from './nav-link'

const navStyles = {
	backgroundColor: `var(--gray5transparent)`,
	height: `100vh`,
	width: `100vw`,
	paddingTop: `60px`,
	paddingRight: `1.0875rem`,
	paddingLeft: `1.0875rem`,
	position: `fixed`,
	top: `0`,
	left: `0`,
	zIndex: `100`,
}

const MainNav = ({ staffInfo }) => {
	let staffCount = staffInfo.totalCount;
	let staffMemberSlug = staffInfo.edges;

	return (
		<nav style={navStyles}>
			<NavLink to="/work">Work</NavLink>
			{(staffCount === 1) ? (
				<NavLink to={`/about/${staffMemberSlug[0].node.slug.current}`}>About</NavLink>
			) : (
				<NavLink to="/about">About</NavLink>
			)}
			<NavLink to="/blog">Blog</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<footer style={{ paddingLeft: `8.5px`}}>
			</footer>
		</nav>
	);
}

export default MainNav;
