import React from 'react'
import './Level.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Level = ({ children, ...props }) => (
  <div className={`${propsToHelperClasses(props)} level`}>
    {children}
  </div>
)

Level.Item = ({ children, ...props }) => (
  <div className="level-item" {...props}>
    {children}
  </div>
)

Level.Left = ({ children, ...props }) => (
  <div className="level-left" {...props}>
    {children}
  </div>
)

Level.Right = ({ children, ...props }) => (
  <div className="level-right" {...props}>
    {children}
  </div>
)

export default Level
