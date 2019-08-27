import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MainNav from './main-nav'
import MenuIcon from './icons/menu-icon'

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
    const headerColor = this.state.menuVisible ? `white` : `var(--gray5)`;
    return (
      <header
        style={{
          background: `white`,
          display: `flex`,
          justifyContent: `space-between`,
          marginBottom: `1.45rem`,
          maxWidth: `960`,
          padding: `1.45rem 1.0875rem`,
          position: `fixed`,
          top: `0`,
          width: `100%`,
          zIndex: `100`
        }}
      >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `${headerColor}`,
                fontFamily: `var(--header-font)`,
                fontWeight: `400`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <button onClick={this.menuToggle}>
            <MenuIcon headerColor={headerColor} />
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
