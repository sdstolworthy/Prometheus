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
  openModal = () => {
    this.setState({ isModalOpen: true })
  }
  closeModal = () => {
    this.setState({ isModalOpen: false })
  }
  render() {
    const qualityCodeHero = (
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
          <Hero.Title>Quality Code. On Time, Every Time.</Hero.Title>
        </Hero.Body>
      </Hero>
    )
    const callToActionHero = (
      <Hero isBold isDark isFullheight>
        <Hero.Body>
          <Hero.Title>We can make your idea come to life.</Hero.Title>
          <Hero.Subtitle>Let's talk about your project</Hero.Subtitle>
          <Hero.CallToAction onClick={this.openModal}>
            Contact Us
          </Hero.CallToAction>
        </Hero.Body>
      </Hero>
    )
    const whoWeWorkedForSection = (
      <Section isMedium>
        <Section.Title>Who we have worked for</Section.Title>
        <Section.Subtitle>Logos. Logos. More Logos.</Section.Subtitle>
      </Section>
    )
    const contactModal = (
      <Modal onClose={this.closeModal} isActive={this.state.isModalOpen}>
        <div style={{backgroundColor: 'white', height: '500px', width: '500px' }}>Hello!</div>
      </Modal>
    )
    return (
      <DefaultLayout>
        <div className="Home">
          {callToActionHero}
          {qualityCodeHero}
          {whoWeWorkedForSection}
          {contactModal}
        </div>
      </DefaultLayout>
    )
  }
}

export default HomePage
