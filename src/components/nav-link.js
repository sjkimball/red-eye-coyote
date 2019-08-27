import React from 'react'
import { Link } from 'gatsby'

const linkStyles = {
	color: `white`,
	display: `block`,
	fontSize: `17px`,
	fontWeight: `500`,
	letterSpacing: `0.5px`,
	marginBottom: `8.5px`,
	padding: `8.5px`,
	textDecoration: `none`,
	textTransform: `uppercase`
}

const activeStyle = {
	border: `1px solid var(--accent1)`,
	color: `white`
}

const NavLink = ({children, to}) => (
	<Link to={to} style={linkStyles} activeStyle={activeStyle}>
		{children}
	</Link>
);

export default NavLink;
