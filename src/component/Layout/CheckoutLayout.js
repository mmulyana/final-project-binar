import React from 'react'
import Stepper from '../Stepper'
import CheckoutNavbar from '../Navbar/CheckoutNavbar'

export default function CheckoutLayout({ index = 1, children }) {
  return (
    <>
      <CheckoutNavbar index={index} />
      <main className='pt-[64px] pb-10 max-w-[900px] mx-auto'>{children}</main>
    </>
  )
}
