import React from "react"
import "./defaultLayout.css"
import { Container, Navbar, Footer } from "../../components"
import PrometheusLogo from "../../prometheus-white.png"

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar logo={PrometheusLogo} isFixedTop isTransparent isBlack>
        <Navbar.Item to="#">Our Services</Navbar.Item>
        <Navbar.Item to="#">About Us</Navbar.Item>
        <Navbar.Item to="#">Get In Touch</Navbar.Item>
      </Navbar>
      {children}
      <Footer isDark />
    </div>
  )
}
