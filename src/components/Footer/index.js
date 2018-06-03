import React from 'react'
import './Footer.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Footer = ({ children, ...props }) => (
  <footer className={`footer ${propsToHelperClasses(props)}`} {...props}>
    <div className="container">
      {children}
    </div>
  </footer>
)

export default Footer