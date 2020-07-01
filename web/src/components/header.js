import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { gsap } from "gsap"

// import MenuIcon from './icons/menu-icon'

import './header.css'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuVisible: false
		};
		// this.openNavTl = gsap.timeline({paused: true});
		// this.closeNavTl = gsap.timeline({paused: true});
	}

	// iconTl = () => {
	// 	const tl = gsap.timeline({defaults: {duration: 0.5}});
	// 	tl.to("#top", {
	// 		transformOrigin: "410 0",
	// 		y: "-36", rotation: "-45",
	// 		stroke: "white",
	// 		attr:{
	// 			x1:-410
	// 		}
	// 	});

	// 	tl.to("#middle", {
	// 		x: "410",
	// 		opacity: "0",
	// 		stroke: "white"
	// 	}, "<");

	// 	tl.to("#bottom", {
	// 		transformOrigin: "410 0",
	// 		y: "36",
	// 		rotation: "45",
	// 		stroke: "white",
	// 		attr:{
	// 			x1:-410
	// 		}
	// 	}, "<");

	// 	return tl;
	// }

	// headerTl = () => {
	// 	const tl = gsap.timeline();
	// 	tl.to("#mainHeader", {
	// 		duration: 0.5,
	// 		backgroundColor: "var(--gray5)"
	// 	});

	// 	tl.to("#header-logo", {
	// 		duration: 0.5,
	// 		color: "var(--gray1)"
	// 	}, "<");

	// 	return tl;
	// }

	// navTl = () => {
	// 	const tl = gsap.timeline();
	// 	tl.to("#nav-links", {
	// 		opacity: "100%",
	// 		height: "92vh"
	// 	});

	// 	tl.from(".nav-link", {
	// 		display: "none",
	// 		opacity: 0,
	// 		stagger: {
	// 			amount: 1
	// 		}
	// 	}, "<");

	// 	return tl;
	// }

	componentDidMount(){
		// this.openNavTl
		// 	.add(this.iconTl())
		// 	.add(this.headerTl(), "<-.25")
		// 	.add(this.navTl());
	}

	componentDidUpdate(prevProps, prevState){
		// const currentVisibility = this.state.menuVisible;
		// const prevVisibility = prevState.menuVisible;
		// const animation = this.openNavTl;
		// if (currentVisibility && currentVisibility !== prevVisibility) {
		// 	animation.play();
		// }else if (animation.reversed() === false) {
		// 	animation.reverse();
		// }
	}

	openMenu = () => {
		const mainHeader = document.getElementById('mainHeader');
		const navLinks = document.getElementById('nav-links');
		if (mainHeader.classList.contains('mainHeader--light')){
			mainHeader.classList.toggle('mainHeader--dark')
		}
		navLinks.classList.toggle('is-active');
	}
	menuToggle = () => {
		this.setState({
			menuVisible: !this.state.menuVisible
		});
	}

	render() {
		const { siteTitle, darkMode, staffInfo } = this.props;
		let headerClass;
// class list toggle?
		(this.state.menuVisible === true) || (darkMode === true) ? (
				headerClass = 'mainHeader--dark'
			) : (
				headerClass = 'mainHeader--light'
			)

		return (
			<header id={`mainHeader`} className={`mainHeader ${headerClass}`}>
				<nav className={`mainNav`} role="navigation">
					<Link to="/" id={`header-logo`} className={`header-logo`}>
						<h1>{siteTitle}</h1>
					</Link>
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
					<button id={`rec-menu-button`} className={`rec-button`} onClick={this.openMenu} aria-label="Menu">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 410" id={`rec-menu-button__icon`} className={`rec-button__icon`}>
			        <line y1="374" x2="410" y2="374" id="bottom"/>
			        <line y1="205" x2="410" y2="205" id="middle" />
			        <line y1="36" x2="410" y2="36" id="top" />
			    	</svg>
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
