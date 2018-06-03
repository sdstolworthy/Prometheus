import React from "react"
import "./defaultLayout.css"
import { Container, Navbar, Footer, Button } from "../../components"
import PrometheusLogo from "../../prometheus-white.png"

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar logo={PrometheusLogo} isFixedTop isTransparent isBlack>
        <Navbar.Link to="#">Our Services</Navbar.Link>
        <Navbar.Link to="#">About Us</Navbar.Link>
        <Navbar.Link to="#">Get In Touch</Navbar.Link>
        <Navbar.Item>
          <Button.ExternalLink href="tel:+18019970739" isRounded isInverted isOutlined isBlack>
            (801) 997-0739
          </Button.ExternalLink>
        </Navbar.Item>
      </Navbar>
      {children}
      <Footer isDark />
    </div>
  )
}
