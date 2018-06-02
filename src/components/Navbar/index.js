import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Navbar = ({ children, logo, ...props }) => (
  <nav className={`navbar ${propsToHelperClasses(props)}`}>
    <div className="container">
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src={logo} />
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        {children}
      </div>
    </div>
    </div>
  </nav>
)
Navbar.Item = ({ children, to, ...props }) => (
  <Link to={to} className={`navbar-item ${propsToHelperClasses(props)}`} >
    {children}
  </Link>
)

export default Navbar