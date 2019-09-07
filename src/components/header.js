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
    const { siteTitle } = this.props;
    let headerClass;

    if (this.props.page == 'about') {
      headerClass = 'mainHeader--dark';
    } else {
      headerClass = 'mainHeader--light'
    }

    return (
      <header className={`mainHeader ${headerClass}`}>
        <Link to="/">
          <h3 className={this.state.menuVisible ? 'navHeading' : ''}>
            {siteTitle}
          </h3>
        </Link>
        <button onClick={this.menuToggle} className={`header-hamButton`}>
          <MenuIcon headerClass={headerClass} menuVisible={this.state.menuVisible}/>
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
