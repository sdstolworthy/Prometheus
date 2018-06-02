import React from 'react'
import { DefaultLayout } from '../../layouts'
import { Navbar, Container, Hero, Section } from '../../components';
import PrometheusLogo from '../../prometheus-white.png'

class HomePage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Navbar
          logo={PrometheusLogo}
          isFixedTop
          isDark
        >
          <Navbar.Item to="#">
            Our Services
          </Navbar.Item>
          <Navbar.Item to="#">
            About Us
          </Navbar.Item>
          <Navbar.Item to="#">
            Get In Touch
          </Navbar.Item>
        </Navbar>
        <Hero isPrimary isBold isLarge isFullheight style={{
          // backgroundImage: `url(${PrometheusLogo})`,
          // backgroundSize: 'contain',
          // backgroundRepeat: 'no-repeat',
          }}
        >
          <Hero.Title>
            Hello there, friend.
          </Hero.Title>
        </Hero>
      <Section isLarge>
        <Section.Title>Section Title</Section.Title>
        this is a section
      </Section>
      </DefaultLayout>
    )
  }
}

export default HomePage