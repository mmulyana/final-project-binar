import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const Footer = () => {
  return (
    <footer className='bg-white pt-[72px] mt-[120px]'>
      {/* Media query untuk lebar layar lebih dari atau sama dengan 786px */}
      <MediaQuery minWidth={786}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto border-b border-gray-300 pb-14'>
          {/* Card 1 */}
          <div className='flex flex-col'>
            <h4 className='text-lg font-bold'>Tripp</h4>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col px-4 md:px-0'>
            <h4 className='text-lg font-medium mb-4'>Perusahaan</h4>
            <ul className='list-none flex flex-col gap-4 text-gray-500'>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Karier</Link>
              </li>
              <li>
                <Link href='/'>Tentang Kami</Link>
              </li>
              <li>
                <Link href='/'>Partner</Link>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col px-4 md:px-0'>
            <h4 className='text-lg font-medium mb-4'>Dukungan</h4>
            <ul className='list-none flex flex-col gap-4 text-gray-500'>
              <li>
                <Link href='/'>Pusat Bantuan</Link>
              </li>
              <li>
                <Link href='/'>Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className='flex flex-col px-4 md:px-0'>
            <h4 className='text-lg font-bold mb-4'>Hubung Kami</h4>

            <div className='flex gap-4'>
              <Link href='/'>
                <Image
                  height={24}
                  width={24}
                  src='icon/facebook.svg'
                  alt='Facebook'
                  className='w-8 h-8'
                />
              </Link>

              <Link href='/'>
                <Image
                  height={24}
                  width={24}
                  src='icon/instagram.svg'
                  alt='Instagram'
                  className='w-8 h-8'
                />
              </Link>

              <Link href='/'>
                <Image
                  height={24}
                  width={24}
                  src='icon/twitter.svg'
                  alt='Twitter'
                  className='w-8 h-8'
                />
              </Link>

              <Link href='/'>
                <Image
                  height={24}
                  width={24}
                  src='icon/whatsapp.svg'
                  alt='Facebook'
                  className='w-8 h-8'
                />
              </Link>
            </div>
          </div>

          {/* Akhir Card 4 */}
        </div>

        {/* copyrighted */}

        <div className='h-[88px] w-full flex justify-center items-center'>
          <p className='text-center text-gray-600'>
            &copy; 2023 All rights reserved
          </p>
        </div>
      </MediaQuery>

      {/* Media query untuk lebar layar kurang dari 786px */}
      <MediaQuery maxWidth={786}>
        <div className='px-4'>
          <div className='grid grid-cols-1 gap-8 pb-12 border-b border-gray-300'>
            {/* Card 1 */}
            <div className='flex flex-col'>
              <h4 className='text-lg font-bold mb-4'>Tripp</h4>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col'>
              <h4 className='font-medium mb-4'>Perusahaan</h4>
              <ul className='list-none flex flex-col gap-4 text-gray-500'>
                <li>
                  <Link href='/'>Blog</Link>
                </li>
                <li>
                  <Link href='/'>Karier</Link>
                </li>
                <li>
                  <Link href='/'>Tentang Kami</Link>
                </li>
                <li>
                  <Link href='/'>Partner</Link>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col'>
              <h4 className='mb-4 font-medium'>Dukungan</h4>
              <ul className='list-none flex flex-col gap-4'>
                <li>
                  <Link href='/' className='text-gray-500'>
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link href='/' className='text-gray-500'>
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className='flex flex-col'>
              <h4 className='font-medium mb-4'>Hubung Kami</h4>

              <div className='flex gap-4'>
                <Link href='/'>
                  <Image
                    height={24}
                    width={24}
                    src='icon/facebook.svg'
                    alt='Facebook'
                    className='w-8 h-8'
                  />
                </Link>

                <Link href='/'>
                  <Image
                    height={24}
                    width={24}
                    src='icon/instagram.svg'
                    alt='Instagram'
                    className='w-8 h-8'
                  />
                </Link>

                <Link href='/'>
                  <Image
                    height={24}
                    width={24}
                    src='icon/twitter.svg'
                    alt='Twitter'
                    className='w-8 h-8'
                  />
                </Link>

                <Link href='/'>
                  <Image
                    height={24}
                    width={24}
                    src='icon/whatsapp.svg'
                    alt='Facebook'
                    className='w-8 h-8'
                  />
                </Link>
              </div>
            </div>

            {/* Akhir Card 4 */}
          </div>
        </div>

        {/* copyrighted */}

        <div className='h-[88px] w-full flex justify-center items-center'>
          <p className='text-center text-gray-600'>
            &copy; 2023 All rights reserved
          </p>
        </div>
      </MediaQuery>
    </footer>
  )
}

export default Footer
