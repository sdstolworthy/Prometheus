import React from 'react'
import './Level.css'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Level = ({ children, ...props }) => (
  <div className={`${propsToHelperClasses(props)} level`}>
    {children}
  </div>
)

Level.Item = ({ children }) => (
  <div className="level-item">
    {children}
  </div>
)

Level.Left = ({ children }) => (
  <div className="level-left">
    {children}
  </div>
)

Level.Right = ({ children }) => (
  <div className="level-right">
    {children}
  </div>
)

export default Level
