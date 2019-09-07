import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MainNav from './main-nav'
import MenuIcon from './icons/menu-icon'

import './header.css'

const headingWhite = {
  color: 'white'
}

const headingRed = {
  color: 'black'
}


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
    let heading;
    console.log(this.props.theme);
    if (this.props.theme == 'dark') {
      heading = <Link to="/" style={headingRed}>
            {siteTitle}
          </Link>;
    } else {
      heading = <Link to="/" style={this.state.menuVisible ? headingWhite : headingRed}>
            {siteTitle}
          </Link>
    }
    return (
      <header className={`mainHeader mainHeader--light`}>
        <h1>
          {heading}
        </h1>
        <button onClick={this.menuToggle} className={`header-hamButton`}>
          <MenuIcon />
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
