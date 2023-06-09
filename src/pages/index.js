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
      <div className='w-full h-[610px] relative mb-56 md:mb-0 z-10'>
        <Image
          src={imgBanner}
          alt='banner'
          width={1440}
          height={880}
          className='w-full h-[300px] md:h-full object-cover object-left-bottom md:object-center'
          priority
        />
        <div className='absolute bottom-[80%] md:bottom-0 translate-y-1/2 md:-translate-y-0 left-0 w-full -mb-80 md:-mb-14 px-4 md:px-0'>
          <div className='max-w-[1200px] mx-auto'>
            <SearchFlight />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <section className='pt-14 mt-16 px-4 md:px-0'>
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
      <section className='bg-white pt-14 pb-20 mt-20 px-4 md:px-0'>
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

      <div className='bg-gray-100 pt-16 px-4'>
        <h1 className='text-center font-semibold text-xl'>Partner Maskapai</h1>
        <p className='text-center mt-4 text-[#131316]/80 max-w-[600px] mx-auto text-sm'>
          Kerjasama kami dengan maskapai penerbangan di seluruh dunia
          memungkinkan kami mengantar Anda ke tujuan impian Anda, tak peduli di
          mana itu berada!
        </p>

        <div className='mt-8 md:mt-12 grid grid-cols-4 justify-self-center md:flex md:justify-center items-center gap-8 md:gap-[150px]'>
          <img src='/image/Garuda.svg' alt='Garuda' />

          <img src='/image/LionAir.svg' alt='LionAir' />

          <img src='/image/BatikAir.svg' alt='BatikAir' />

          <img src='/image/AirAsia.svg' alt='AirAsia' />
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-4 justify-self-center md:flex md:justify-center items-center gap-8 md:gap-[100px]'>
          <img src='/image/Qatar.svg' alt='Qatar' />

          <img src='/image/jal.svg' alt='Japan' />

          <img src='/image/Lufthansa.svg' alt='Lufthansa' />
        </div>
      </div>
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
