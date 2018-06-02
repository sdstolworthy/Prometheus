import React from 'react'
import './defaultLayout.css'
import { Container } from '../../components';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}