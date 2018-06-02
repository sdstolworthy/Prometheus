import React from 'react'
import { propsToHelperClasses } from '../../helpers/componentHelpers';
import './Section.css'

const Section = ({ children, ...props }) => (
  <section className={`section ${propsToHelperClasses(props)}`} {...props}>
    <div className="container">
      {children}
    </div>
  </section>
)

Section.Title = ({ children }) => (
  <h1 className="title">{children}</h1>
)

Section.Subtitle = ({ children }) => (
  <h2 className="subtitle">{children}</h2>
)

export default Section