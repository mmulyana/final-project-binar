import CardFlight from '@/component/Card/CardFlight'
import DefaultLayout from '@/component/Layout/DefaultLayout'
import SearchFlight from '@/component/SearchFlight'
import CardSuggest from '@/component/Card/CardSuggest'
import { flights, suggestDestination } from '@/utils/local'
import Image from 'next/image'
import imgBanner from 'public/image/banner-high.jpg'

function Home() {
  return (
    <>
      <div className='w-full h-[610px] relative'>
        <Image
          src={imgBanner}
          alt='banner'
          width={1440}
          height={880}
          className='w-full h-full object-cover object-left-bottom md:object-center'
          priority
        />
        <div className='absolute bottom-0 left-0 w-full -mb-80 md:-mb-14 px-4 md:px-0'>
          <div className='max-w-[1200px] mx-auto'>
            <SearchFlight />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <section className='pt-14 mt-16'>
        <div className='max-w-[1200px] mx-auto'>
          <p className='text-2xl text-slate-900'>Yuk jelajahi dunia kembali</p>
          <p className='text-sm text-[#A5A4A9]'>
            Nikmati petualangan yang menanti di berbagai destinasi.
          </p>
          <div className='mt-6'>
            <CardSuggest data={suggestDestination} />
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className='bg-white pt-14 pb-20 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <h2 className='text-2xl text-[#0E0C25]'>
            Destinasi internasional yang banyak diminati
          </h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-6'>
            {flights.map((flight, index) => (
              <CardFlight data={flight} key={index} />
            ))}
          </div>

          <h2 className='text-2xl text-[#0E0C25] mt-14'>
            Destinasi Lokal yang banyak diminati
          </h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-6'>
            {flights.map((flight, index) => (
              <CardFlight data={flight} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* section 4 */}
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
