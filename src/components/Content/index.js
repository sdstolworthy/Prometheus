import React from 'react'
import './Content.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Content = ({ children, ...props }) => (
  <div className={`content ${propsToHelperClasses(props)}`}>
    {children}
  </div>
)

export default Content
