import React from "react";
import { DefaultLayout } from "../../layouts";
import { Navbar, Container, Hero, Section, Footer } from "../../components";
import PrometheusLogo from "../../prometheus-white.png";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar logo={PrometheusLogo} isFixedTop isDark>
          <Navbar.Item to="#">Our Services</Navbar.Item>
          <Navbar.Item to="#">About Us</Navbar.Item>
          <Navbar.Item to="#">Get In Touch</Navbar.Item>
        </Navbar>
        <Hero
          isBold
          isPrimary
          isFullheight
          style={
            {
              // backgroundImage: `url(${PrometheusLogo})`,
              // backgroundSize: 'contain',
              // backgroundRepeat: 'no-repeat',
            }
          }
        >
          <Hero.Title>Hello there, friend.</Hero.Title>
        </Hero>
        <Hero
          isSuccess
          isBold
          isLarge
          isFullheight
          style={
            {
              // backgroundImage: `url(${PrometheusLogo})`,
              // backgroundSize: 'contain',
              // backgroundRepeat: 'no-repeat',
            }
          }
        >
          <Hero.Title>Hello there, friend.</Hero.Title>
        </Hero>
        <Section isLarge>
          <Section.Title>Section Title</Section.Title>
          <Section.Subtitle>this is a section</Section.Subtitle>
        </Section>
        <Section style={{ height: "100vh", backgroundColor: "blue" }} />
        <Footer isPrimary />
      </div>
    );
  }
}

export default HomePage;
