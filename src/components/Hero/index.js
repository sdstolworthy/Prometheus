import React from "react"
import { propsToHelperClasses } from "../../helpers/componentHelpers"

const Hero = ({ children, style, ...props }) => (
  <div style={style} className={`hero ${propsToHelperClasses(props)}`}>
    {children}
  </div>
)

Hero.Body = ({ children, style, ...props }) => (
  <div
    style={style}
    className={`hero-body ${propsToHelperClasses(props)}`}
    {...props}
  >
    <div className="container">{children}</div>
  </div>
)

Hero.Title = ({ children }) => <h1 className="title">{children}</h1>

Hero.Subtitle = ({ children }) => <h2 className="subtitle">{children}</h2>

Hero.CallToAction = ({ children, ...props }) => (
  <a className={`button is-black is-inverted is-outlined ${propsToHelperClasses(props)}`} {...props}>
    {children}
  </a>
)

export default Hero
