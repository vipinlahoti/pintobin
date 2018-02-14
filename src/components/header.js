import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar is-transparent is-fixed-top">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">PintoBin</Link>
    </div>
  </nav>
)

export default Header
