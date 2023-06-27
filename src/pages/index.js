import { useEffect, useMemo, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import api from '@/services/api'
import Cookies from 'js-cookie'

import CardFlight from '@/component/Card/CardFlight'
import DefaultLayout from '@/component/Layout/DefaultLayout'
import SearchFlight from '@/component/SearchFlight'
import CardSuggest from '@/component/Card/CardSuggest'
import imgBanner from 'public/image/banner-high.jpg'

import { removeRedundantCities } from '@/utils'
import { setUser } from '@/redux/reducers/auth'
import { initialValue, searchReducer } from '@/component/SearchFlight/reducer'

function Home() {
  const dispatch = useDispatch()
  
  const [state, dispatchReducer] = useReducer(searchReducer, initialValue)
  const [flightsData, setFlightsData] = useState([])
  const [favoriteData, setFavoriteData] = useState([])

  const fetchfavoriteData = async () => {
    try {
      const response = await api('/flights/favorite-city')
      setFavoriteData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchFlightsData = async () => {
    try {
      const response = await api('/flights/data?start=1&length=8')
      setFlightsData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const favoriteCities = useMemo(() => {
    return removeRedundantCities(favoriteData)
  }, [favoriteData])

  useEffect(() => {
    fetchfavoriteData()
    fetchFlightsData()

    const p = Cookies.get('profile')
    if (p) {
      dispatch(setUser(JSON.parse(p)))
    }
  }, [dispatch])

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
        <div className='absolute bottom-[80%] md:bottom-0 translate-y-1/2 md:-translate-y-0 left-0 w-full -mb-80 md:-mb-14 px-4 md:px-0 z-20'>
          <div className='max-w-[1200px] mx-auto'>
            <SearchFlight state={state} dispatch={dispatchReducer} />
          </div>
        </div>

        {(state.isOpen.searchDeparture ||
          state.isOpen.searchReturn ||
          state.isOpen.date ||
          state.isOpen.passenger ||
          state.isOpen.seatClass ||
          state.isOpen.isReturnDate) && (
          <div
            className='fixed top-0 left-0 h-full w-full bg-black/50 z-10'
            onClick={() => {
              dispatchReducer({
                type: 'makeAllFalse',
              })
            }}
          />
        )}
      </div>

      {/* section 2 */}
      <section className='pt-14 mt-16 px-4 md:px-0'>
        <div className='max-w-[1200px] mx-auto'>
          <p className='text-2xl text-slate-900'>Yuk jelajahi dunia kembali</p>
          <p className='text-sm text-[#A5A4A9]'>
            Nikmati petualangan yang menanti di berbagai destinasi.
          </p>
          <div className='mt-6'>
            <CardSuggest data={favoriteCities} />
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className='bg-white pt-14 pb-20 mt-20 px-4 md:px-0'>
        <div className='max-w-[1200px] mx-auto'>
          <h2 className='text-2xl text-[#0E0C25]'>
            Destinasi Lokal yang banyak diminati
          </h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-6'>
            {flightsData?.map((flight, index) => (
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
          <Image width={120} height={60} src='/image/Garuda.svg' alt='Garuda' className='w-auto h-auto'/>

          <Image width={120} height={60} src='/image/LionAir.svg' alt='LionAir' className='w-auto h-auto'/>

          <Image width={120} height={60} src='/image/BatikAir.svg' alt='BatikAir' className='w-auto h-auto'/>

          <Image width={120} height={60} src='/image/AirAsia.svg' alt='AirAsia' className='w-auto h-auto'/>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-4 justify-self-center md:flex md:justify-center items-center gap-8 md:gap-[100px]'>
          <Image width={120} height={60} src='/image/Qatar.svg' alt='Qatar' className='w-auto h-auto'/>

          <Image width={120} height={60} src='/image/jal.svg' alt='Japan' className='w-auto h-auto'/>

          <Image width={120} height={60} src='/image/Lufthansa.svg' alt='Lufthansa' className='w-auto h-auto'/>
        </div>
      </div>
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
