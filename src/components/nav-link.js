import React from 'react'
import { Link } from 'gatsby'

const linkStyles = {
	color: `red`,
	letterSpacing: `0.5px`,
	textTransform: `uppercase`,
	fontWeight: `500`
}

const activeStyle = {
	color: `white`,
	backgroundColor: `red`,
}

const NavLink = ({children, to}) => (
	<Link to={to} style={linkStyles} activeStyle={activeStyle}>
		{children}
	</Link>
);

export default NavLink;
