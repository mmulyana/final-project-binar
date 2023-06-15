import Link from 'next/link'
import Stepper from '../Stepper'
import dynamic from 'next/dynamic'
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

export default function CheckoutNavbar({ index }) {
  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-full pt-4 bg-white'>
        <MediaQuery minWidth={786}>
          <div className='max-w-[1200px] px-4 lg:px-0 mx-auto flex items-center justify-between relative z-10 pb-4'>
            <Link href='/' className='text-2xl font-semibold text-slate-700'>
              Tripp
            </Link>

            <Stepper index={index} />
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={786}>
          <div className='max-w-[1200px] px-4 lg:px-0 mx-auto flex items-center justify-center relative z-10 pb-4'>
            <Stepper />
          </div>
        </MediaQuery>
      </nav>
    </>
  )
}
