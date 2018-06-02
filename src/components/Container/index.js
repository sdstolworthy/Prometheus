import React from 'react'
import './Container.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Container = ({ children, ...props }) => (
  <div className={`container ${propsToHelperClasses(props)}`} {...props}>
    {children}
  </div>
)

export default Container