import React from "react"
import { DefaultLayout } from "../../layouts"
import {
  Hero,
  Section,
  Modal
} from 'prometheusui'
import CodeHero from "../../assets/images/code-hero.png"
import LogoGallery from '../../assets/images/logos.png'
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
          <Hero.Subtitle>
            <p>
              Prometheus Software Consulting can take care the hassle out of large tech projects,<br/>so your business can get back to doing what it does best.
            </p>
          </Hero.Subtitle>
          <Hero.CallToAction isRounded onClick={this.openModal}>
            Ask us how
          </Hero.CallToAction>
        </Hero.Body>
      </Hero>
    )
    const callToActionHero = (
      <Hero isBold isDark isFullheight>
        <Hero.Body>
          <Hero.Title>We can make your idea come to life.</Hero.Title>
          <Hero.Subtitle>Let's talk about your project</Hero.Subtitle>
          <Hero.CallToAction isRounded onClick={this.openModal}>
            Contact Us
          </Hero.CallToAction>
        </Hero.Body>
      </Hero>
    )
    const whoWeWorkedForSection = (
      <Section isLarge>
        <Section.Title>Where our partners have worked</Section.Title>
        <img src={LogoGallery} alt="logo-banner" />
      </Section>
    )
    const contactModal = (
      <Modal onClose={this.closeModal} isActive={this.state.isModalOpen}>
        <div style={{backgroundColor: 'white', height: '500px', width: '500px' }}>Hello!</div>
      </Modal>
    )
    return (
      <DefaultLayout location={this.props.location}>
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
