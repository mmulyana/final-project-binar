import dynamic from 'next/dynamic'
import Link from 'next/link'
import Button from '../Button'
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

export default function Navbar() {
  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-full pt-7'>
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/40 to-black/0'></div>
        <div className='container max-w-[1200px] px-4 lg:px-0 mx-auto flex items-center justify-between relative z-10 pb-4 border-b border-white/80'>
          <MediaQuery minWidth={786}>
            <div className='flex items-center gap-14'>
              <Link href='/' className='text-2xl font-semibold text-white'>
                Tripp
              </Link>
              <nav className='flex items-center gap-10'>
                <Link
                  href='/'
                  className='text-sm text-white flex gap-2 items-center px-4 py-2 hover:bg-white/20 rounded'
                >
                  Promo
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.5994 6.09733L14.0795 6.57733C14.4597 6.95066 14.6664 7.45733 14.6664 7.99066C14.6731 8.52399 14.4664 9.03133 14.0929 9.41066C14.0884 9.41554 14.084 9.41984 14.0796 9.42413C14.0773 9.42628 14.0751 9.42843 14.0729 9.43066L13.5994 9.90399C13.4126 10.0907 13.3059 10.344 13.3059 10.6113V11.2973C13.3059 12.404 12.4056 13.3047 11.2985 13.3047H10.6116C10.3449 13.3047 10.0914 13.4107 9.9047 13.5973L9.42453 14.0773C9.03105 14.4713 8.51753 14.664 8.00401 14.664C7.49049 14.664 6.97697 14.4713 6.5835 14.0847L6.09666 13.5973C5.90992 13.4107 5.6565 13.3047 5.38973 13.3047H4.70282C3.59575 13.3047 2.69542 12.404 2.69542 11.2973V10.6113C2.69542 10.344 2.58872 10.0907 2.40198 9.89733L1.92181 9.42399C1.14153 8.64466 1.13486 7.37066 1.91514 6.58466L2.40198 6.09733C2.58872 5.91066 2.69542 5.65733 2.69542 5.38399V4.70399C2.69542 3.59733 3.59575 2.69799 4.70282 2.69799H5.38973C5.6565 2.69799 5.90992 2.59066 6.09666 2.40399L6.57683 1.92399C7.35711 1.13799 8.63091 1.13799 9.41786 1.91799L9.9047 2.40399C10.0914 2.59066 10.3449 2.69799 10.6116 2.69799H11.2985C12.4056 2.69799 13.3059 3.59733 13.3059 4.70399V5.39133C13.3059 5.65733 13.4126 5.91066 13.5994 6.09733ZM6.28339 10.2973C6.44345 10.2973 6.59017 10.2373 6.69687 10.124L10.1248 6.69799C10.3515 6.47133 10.3515 6.09733 10.1248 5.87066C9.89803 5.64466 9.53123 5.64466 9.30449 5.87066L5.87658 9.29733C5.64983 9.52399 5.64983 9.89733 5.87658 10.124C5.98328 10.2373 6.13 10.2973 6.28339 10.2973ZM9.13109 9.71066C9.13109 10.0373 9.39118 10.2973 9.71797 10.2973C10.0381 10.2973 10.2982 10.0373 10.2982 9.71066C10.2982 9.39133 10.0381 9.13066 9.71797 9.13066C9.39118 9.13066 9.13109 9.39133 9.13109 9.71066ZM6.29006 5.70399C6.61018 5.70399 6.87027 5.96399 6.87027 6.28399C6.87027 6.61133 6.61018 6.87066 6.29006 6.87066C5.96994 6.87066 5.70318 6.61133 5.70318 6.28399C5.70318 5.96399 5.96994 5.70399 6.29006 5.70399Z'
                      fill='#FFF59B'
                    />
                  </svg>
                </Link>
                <Link
                  href='/'
                  className='text-sm text-white px-4 py-2 hover:bg-white/20 rounded'
                >
                  Cek Pesanan
                </Link>
                <Link
                  href='/'
                  className='text-sm text-white px-4 py-2 hover:bg-white/20 rounded'
                >
                  Bantuan
                </Link>
              </nav>
            </div>
            <Button className='px-6 py-4 text-[#1E1E1E] font-medium bg-white rounded shadow-sm text-sm'>
              Masuk/Daftar
            </Button>
          </MediaQuery>
          
          <MediaQuery maxWidth={786}>
            <Link href='/' className='text-2xl font-semibold text-white'>
              TrippA
            </Link>
            
            <Button>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 12H21M3 6H21M9 18H21'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Button>
          </MediaQuery>
        </div>
      </nav>
    </>
  )
}