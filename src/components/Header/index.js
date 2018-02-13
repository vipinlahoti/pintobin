import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar is-transparent is-fixed-top">
    <div className="navbar-end">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">PintoBin</Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
