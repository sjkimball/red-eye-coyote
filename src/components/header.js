import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
		const nav = document.getElementById('nav-links');
		nav.classList.toggle('nav-active');
	}

	render() {
		const { siteTitle, darkMode, staffInfo } = this.props;
		let headerClass;

		(this.state.menuVisible === true) || (darkMode === true) ? (
				headerClass = 'mainHeader--dark'
			) : (
				headerClass = ''
			)

		return (
			<header id={`mainHeader`} className={`mainHeader ${headerClass}`}>

				<nav className={`mainNav`}>
					{/*Brankmark or Home link*/}
					<div>
						<Link to="/" className={`header-logo`}>
							<h3>{siteTitle}</h3>
						</Link>
					</div>

					{/*Primary links*/}
					<ul id={`nav-links`} className={`nav-links`}>
						<li>
							<Link to="/work" className={`nav-link`} activeClassName="active" partiallyActive={true}>Work</Link>
						</li>
						{(staffInfo.totalCount === 1) ?
							(<li><Link to={`/about/${staffInfo.edges[0].node.slug.current}`} className={`nav-link`} activeClassName="active" partiallyActive={true}>About</Link></li>)
							:
							(<li><Link to="/about" className={`nav-link`} activeClassName="active" partiallyActive={true}>About</Link></li>)
						}
						<li>
							<Link to="/blog" className={`nav-link`} activeClassName="active" partiallyActive={true}>Blog</Link>
						</li>
						<li>
							<Link to="/contact" className={`nav-link`} activeClassName="active" partiallyActive={true}>Contact</Link>
						</li>
					</ul>

					{/*Button for toggling mobile nav*/}
					<button onClick={this.menuToggle} className={`menuButton`} aria-label="Menu">
						<MenuIcon headerClass={headerClass} menuVisible={this.state.menuVisible}/>
					</button>
				</nav>

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
