import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Button = {}
Button.ExternalLink = ({ children, href, ...props }) => (
  <a href={href} className={`button ${propsToHelperClasses(props)}`}>{children}</a>
)
Button.Link = ({ children, to, ...props }) => (
  <Link to={to} className={`button ${propsToHelperClasses(props)}`}>{children}</Link>
)

export default Button