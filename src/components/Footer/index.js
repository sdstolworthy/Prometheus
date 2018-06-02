import React from 'react'
import './Footer.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Footer = ({ children, ...props }) => (
  <footer class={`footer ${propsToHelperClasses(props)}`} {...props}>
    <div class="container">
      {children}
    </div>
  </footer>
)

export default Footer