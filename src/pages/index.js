import SearchFlight from '@/component/SearchFlight'
import Image from 'next/image'
import imgBanner from 'public/images/banner.png'

export default function Home() {
  return (
    <>
      <Banner />
      <div className='container -mt-14 relative z-[5px]'>
        <SearchFlight />
      </div>
    </>
  )
}

function Banner() {
  return (
    <div className='relative w-full'>
      <div className='h-[150px] w-full bg-primary-purple-4/50 mt-[148px]'></div>
      <div className='h-[232px] w-[1210px] max-w-full rounded-none md:rounded-[20px] bg-primary-cream-3 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center px-4 md:px-8 lg:px-16 overflow-hidden'>
        <div className='relative z-[11]'>
          <h3 className='font-extrabold italic text-4xl'>Diskon Hari ini</h3>
          <p className='text-4xl text-primary-purple-4 font-extrabold italic'>
            85%!
          </p>
        </div>
        <div className='bg-gradient-to-l from-primary-cream-3/0 to-primary-cream-3 absolute top-0 right-0 w-[761px] h-full z-10' />
        <div className='w-[760px] h-full absolute right-0 top-0 bg-gray-50'>
          <Image src={imgBanner} h={232} w={760} />
        </div>
      </div>
    </div>
  )
}
