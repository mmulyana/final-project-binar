import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobileQuery = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(isMobileQuery)
    }
  }, [isMobileQuery])

  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-screen flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-none md:shadow shadow-gray-500'>
        <div className='container max-w-[1210px] px-4 mx-auto flex items-center justify-between'>
          {/* logo */}
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              href='/'
              className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-pink-500'
            >
              <img src='/logo.png' alt='Logo' className='h-10 w-auto mr-4' />
            </Link>
          </div>

          {/* search and login */}
          <div className='flex items-center justify-between gap-6'>
            <div className='relative flex items-center'>
              {!isMobile ? (
                <input
                  type='text'
                  placeholder='Cari Disini'
                  className='h-12 w-full sm:w-auto left-0 sm:left-20 top-4 border border-gray-300 rounded-full px-6 py-3 bg-gray-200 text-black focus:outline-none focus:border-purple-500'
                />
              ) : null}
              <span className='absolute right-0 pr-3'>
                <svg
                  className='w-5 h-5 text-gray-400'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </span>
            </div>

            <Link
              href='/login'
              className='h-12 w-28 bg-purple-700 px-4 py-3 text-white font-bold flex items-center justify-center rounded-xl'
            >
              <svg
                className='w-4 h-4 mr-2 text-white'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.33301 14.1663L12.4997 9.99967L8.33301 5.83301'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12.5 10H2.5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Masuk</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
