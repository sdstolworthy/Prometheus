import React from 'react'
import { DefaultLayout } from '../../layouts'
import './Services.css'
import { Section, Content } from '../../components';

class Services extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <DefaultLayout location={this.props.location}>
        <Section>
          <Section.Title>Our Services</Section.Title>
          <Content>
            <p>
              Prometheus offers a range of technical consulting services.
            </p>
            <p>
              Our objective is always to help clients save money by developing applications that are scalable and maintainable.
            </p>
            <p>
              We have are committed to delivering projects on time and on budget.
            </p>
            <p>
              Our offerings include:
            </p>
            <ul>
              <li>Custom software development for established businesses</li>
              <li>Rapid development and deployment of Minimum Viable Products (MVPs) for companies just getting off the ground</li>
            </ul>
          </Content>
        </Section>
      </DefaultLayout>
    )
  }
}

export default Services