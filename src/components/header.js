import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import ButtonMenu from './buttons/button-menu'
import MainNav from './main-nav'

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
    const headerColor = this.state.menuVisible ? `red` : `black`;
    return (
      <header
        style={{
          // background: `white`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `${headerColor}`,
                fontFamily: `var(--header-font)`,
                fontWeight: `400`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <ButtonMenu onPress={this.menuToggle} menuVisible={this.state.menuVisible}/>
        </div>
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
