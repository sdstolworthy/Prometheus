import React from "react"
import "./defaultLayout.css"
import { Container, Navbar, Footer, Button, Level } from "../../components"
import PrometheusLogo from "../../prometheus-white.png"
import { PhoneIcon } from "../../assets/icons";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar logo={PrometheusLogo} isFixedTop isTransparent isBlack>
        <Navbar.Link to="#">Our Services</Navbar.Link>
        <Navbar.Link to="#">About Us</Navbar.Link>
        <Navbar.Link to="#">Get In Touch</Navbar.Link>
        <Navbar.Item>
          <Button.ExternalLink href="tel:+18019970739" isRounded isInverted isOutlined isBlack>
            <PhoneIcon size={"1.3rem"} />&nbsp;&nbsp;(801) 997-0739
          </Button.ExternalLink>
        </Navbar.Item>
      </Navbar>
      {children}
      <Footer style={{ backgroundColor: '#363636', color: 'white' }}>
        <Level>
          <Level.Left style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div><a style={{ color: 'white' }} href="mailto:info@prometheusconsulting.io">info@prometheusconsulting.io</a></div>
            <div><a style={{ color: 'white' }} href="tel:+18019970739">(801) 997-0739</a></div>
            <div>A Proud Utah Business</div>
          </Level.Left>
          <Level.Right>
            &copy; {new Date().getFullYear()} Prometheus Software Consulting, LLC
          </Level.Right>
        </Level>
      </Footer>
    </div>
  )
}
