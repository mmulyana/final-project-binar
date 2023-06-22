import CheckoutNavbar from '../Navbar/CheckoutNavbar'

export default function CheckoutLayout({ index = 1, children }) {
  return (
    <>
      {index < 3 ? <CheckoutNavbar index={index} /> : null}
      {index < 3 ? (
        <main className='pt-[64px] pb-10 max-w-[900px] mx-auto'>
          {children}
        </main>
      ) : (
        children
      )}
    </>
  )
}
