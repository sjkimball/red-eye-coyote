import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MainNav from './main-nav'
import MenuIcon from './icons/menu-icon'

import './header.css'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuVisible: false,
		};
		this.menuToggle = this.menuToggle.bind(this);
	}

	menuToggle() {
		this.setState({
			menuVisible: !this.state.menuVisible
		});
	}

	render() {
		const { siteTitle, darkMode } = this.props;
		let headerClass;

		(darkMode == true) ? (
				headerClass = 'mainHeader--dark'
			) : (
				headerClass = 'mainHeader--light'
			)

		return (
			<header className={`mainHeader ${headerClass}`}>
				<Link to="/" className={this.state.menuVisible ? 'header-logo header-logo--light' : 'header-logo header-logo--dark'}>
					<h3>{siteTitle}</h3>
				</Link>
				<nav className={`mainNav`}>
					<Link to="/work" className={`nav-item`} activeClassName="active" partiallyActive={true}>Work</Link>
					<Link to="/about" className={`nav-item`} activeClassName="active" partiallyActive={true}>About</Link>
					<Link to="/blog" className={`nav-item`} activeClassName="active" partiallyActive={true}>Blog</Link>
					<Link to="/contact" className={`nav-item`} activeClassName="active" partiallyActive={true}>Contact</Link>
					<button onClick={this.menuToggle} className={`menuButton`} aria-label="Menu">
						<MenuIcon headerClass={headerClass} menuVisible={this.state.menuVisible}/>
					</button>
				</nav>
				{this.state.menuVisible ? <MainNav/> : ``}
			</header>
		);
	}
}
Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
