import React from 'react'
import { DarkNavbar } from '../Navbar'
import Footer from '../Footer'

export default function SecondaryLayout({ children }) {
  return (
    <>
      <DarkNavbar />
      {children}
      <Footer />
    </>
  )
}
