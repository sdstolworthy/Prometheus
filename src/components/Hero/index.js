import React from 'react'
import { propsToHelperClasses } from '../../helpers/componentHelpers';

const Hero = ({ children, style, ...props }) => (
  <div style={style} className={`hero ${propsToHelperClasses(props)}`}>
    <div className="hero-body">
      <div class="container">
        {children}
      </div>
    </div>
  </div>
)

Hero.Title = ({ children }) => (
  <h1 class="title">
    {children}
  </h1>
)

Hero.Subtitle = ({ children }) => (
  <h2 class="subtitle">
    {children}
  </h2>
)

export default Hero