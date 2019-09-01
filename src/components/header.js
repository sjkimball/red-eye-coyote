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
      menuVisible: false
    };
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }

  render() {
    const { siteTitle } = this.props;
    const headerClass = this.state.menuVisible ? `dark` : `light`;
    return (
      <header className={`mainHeader mainHeader--${headerClass}`}>
          <h1>
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
          <button onClick={this.menuToggle} className={`header-hamButton`}>
            <MenuIcon headerClass={headerClass}/>
          </button>
        {this.state.menuVisible ? <MainNav/> : ``}
      </header>
    );
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
