import React from "react"
import { DefaultLayout } from "../../layouts"
import {
  Navbar,
  Container,
  Hero,
  Section,
  Footer,
  Modal
} from "../../components"
import CodeHero from "../../assets/images/code-hero.png"
import "./Home.css"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }
  render() {
    return (
      <DefaultLayout>
        <div className="Home">
          <Hero
            isSuccess
            isBold
            isLarge
            isFullheight
            style={{
              background: `url(${CodeHero})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div className="hero-cover" />
            <Hero.Body>
              <Hero.Title>We can make your idea come to life.</Hero.Title>
              <Hero.Subtitle>Let's talk about your project</Hero.Subtitle>
              <Hero.CallToAction>Contact Us</Hero.CallToAction>
            </Hero.Body>
          </Hero>
          <Hero isBold isPrimary isFullheight>
            <Hero.Body>
              <Hero.Title>Hello there, friend.</Hero.Title>
            </Hero.Body>
          </Hero>
          <Section isLarge>
            <Section.Title>Section Title</Section.Title>
            <Section.Subtitle>this is a section</Section.Subtitle>
          </Section>
          <Section style={{ height: "100vh", backgroundColor: "blue" }} />
          <Footer isDark />
          <Modal isActive={this.state.isModalOpen}>
            <Container>Hello!</Container>
          </Modal>
        </div>
      </DefaultLayout>
    )
  }
}

export default HomePage
