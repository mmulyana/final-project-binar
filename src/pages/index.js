import DefaultLayout from '@/component/Layout/DefaultLayout'
import SearchFlight from '@/component/SearchFlight'
import Image from 'next/image'
import imgBanner from 'public/images/banner.png'

function Home() {
  return (
    <>
      <div className='w-full h-[610px] relative'>
        <Image
          src={imgBanner}
          alt='banner'
          w={1440}
          h={610}
          className='w-full h-full object-cover object-left-bottom md:object-left-top'
        />
        <div className='absolute bottom-0 left-0 w-full -mb-14 px-4 md:px-0'>
          <div className='max-w-[1200px] mx-auto'>

          <SearchFlight />
          </div>
        </div>
      </div>
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
