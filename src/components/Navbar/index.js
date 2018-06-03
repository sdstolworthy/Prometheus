import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Navbar = ({ children, logo, ...props }) => (
  <nav className={`navbar ${propsToHelperClasses(props)}`}>
    <div className="container">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={logo} />
      </Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        {children}
      </div>
    </div>
    </div>
  </nav>
)
Navbar.Link = ({ children, to, ...props }) => (
  <Link to={to} className={`navbar-item ${propsToHelperClasses(props)}`} >
    {children}
  </Link>
)

Navbar.Item = ({ children, ...props }) => (
  <div className={`navbar-item ${propsToHelperClasses(props)}`} >
    {children}
  </div>
)

export default Navbar