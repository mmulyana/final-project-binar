import React from 'react'
import { DarkNavbar } from '../Navbar'
import Footer from '../Footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <DarkNavbar />
      <main className='pb-[120px]'>{children}</main>
      <Footer />
    </>
  )
}