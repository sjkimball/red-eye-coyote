import React from 'react'
import { Link } from 'gatsby'

const linkStyles = {
	display: `block`,
	color: `white`,
	textDecoration: `none`,
	letterSpacing: `0.5px`,
	textTransform: `uppercase`,
	fontWeight: `500`,
	fontSize: `17px`,
	marginBottom: `17px`
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
