import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'

import Ic_Chevron_Down from 'public/icon/chevron-down.svg'
import Ic_Passenger from 'public/icon/passenger.svg'
import Ic_Plane_Takeoff from 'public/icon/flight_takeoff.svg'
import Ic_Plane_Land from 'public/icon/flight_land.svg'
import Ic_Switch from 'public/icon/switch.svg'
import SuggestionModal from '../Modal/SuggestionModal'
import Switch from '../Form/SwitchFlight'
import DateModal from '../Modal/DateModal'
import PassengerModal from '../Modal/PassengerModal'
import { useRouter } from 'next/router'
import { convertToDateString } from '@/utils'

export default function SearchFlight({ state, dispatch }) {
  const [searchType, setSearchType] = useState('')
  const router = useRouter()

  function handleToggle(payload) {
    dispatch({ type: 'toggle', payload })
  }

  function handleSearch() {
    if (!state.data.isOneWay && state.data.returnDate == '') {
      return
    }

    const query = {
      origin: state.data.origin,
      destination: state.data.destination,
      dateD: convertToDateString(state.data.departureDate),
      dateR: state.data.returnDate !== '' ? convertToDateString(state.data.returnDate) : 0,
      a: state.data.passengers.adult,
      k: state.data.passengers.kid,
      b: state.data.passengers.baby,
      cnt: sumPassenger,
      iow: state.data.isOneWay,
      l: state.data.seatClass
    }

    const url = `/result?or=${query.origin}&ds=${query.destination}&dd=${query.dateD}&dr=${query.dateR}&a=${query.a}&k=${query.k}&b=${query.b}&c=${query.cnt}&iow=${query.iow}&l=${query.l}`
    router.push(url)
  }

  const sumPassenger = useMemo(() => {
    if (state)
      return Object.values(state.data.passengers).reduce(
        (acc, obj) => acc + obj,
        0
      )
  }, [state])

  useEffect(() => {
    dispatch({
      type: 'onchange',
      payload: {
        type: 'departureDate',
        value: new Date(),
      },
    })
  }, [dispatch])

  return (
    <>
      <div className='bg-white rounded-xl w-full h-fit mx-auto mt-20 shadow-high relative z-20 pb-2'>
        {/* top */}
        <div className='w-full h-fit pt-5 flex items-center md:items-center justify-between flex-col md:flex-row px-6 border-b border-gray-200'>
          <Switch
            dispatch={dispatch}
            leftText='Sekali jalan'
            rightText='Pulang-pergi'
            value={state.data.isOneWay}
          />

          <div className='w-full md:w-fit text-sm mt-10 md:mt-0 relative flex justify-between gap-6 pb-2'>
            <div
              className='flex flex-wrap items-center gap-4 cursor-pointer'
              onClick={() => dispatch({ type: 'toggle', payload: 'passenger' })}
            >
              <Image src={Ic_Passenger} h={24} w={24} alt='passenger' />
              <p className='font-semibold text-slate-800'>
                {sumPassenger} <span className='font-normal'>Penumpang,</span>{' '}
                {state.data.seatClass}
              </p>
            </div>
            <Button
              onClick={() => dispatch({ type: 'toggle', payload: 'passenger' })}
            >
              <Image src={Ic_Chevron_Down} alt='chevron down' />
            </Button>
            <PassengerModal
              isOpen={state?.isOpen.passenger}
              toggleModal={() => handleToggle('passenger')}
              dispatch={dispatch}
              state={state}
            />
          </div>
        </div>

        {/* below */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-6 relative'>
          {/* destination */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative'>
            <div>
              <p className='text-sm font-medium mb-3'>Terbang dari</p>
              <div className='relative h-14 bg-[#e9e9e9] rounded flex items-center px-6 gap-4'>
                <Image src={Ic_Plane_Takeoff} h={24} w={24} alt='from' />
                {state.isOpen.searchDeparture ? (
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: 'onchange',
                        payload: {
                          type: 'valueFrom',
                          value: e.target.value,
                        },
                      })
                    }
                    onFocus={(e) => {
                      if (state.isOpen.searchReturn) {
                        handleToggle('searchReturn')
                      }
                      setSearchType('from')
                    }}
                    value={state.data.valueFrom}
                    className='bg-transparent outline-none w-full'
                    autoFocus
                  />
                ) : (
                  <>
                    <p
                      onClick={() => {
                        dispatch({
                          type: 'onchangeIsOpen',
                          payload: { type: 'searchDeparture', value: true },
                        })
                        setSearchType('from')
                      }}
                      className='capitalize'
                    >
                      {state.data.from}{' '}
                      <span className='font-medium uppercase'>
                        ({state.data.origin})
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
            <Button
              onClick={() => dispatch({ type: 'switchDestionation' })}
              className='border border-slate-300 md:border-none h-12 w-12 md:w-8 md:h-8 rounded-full flex items-center justify-center absolute left-[90%] md:left-1/2 top-[58%] md:top-[70%] -translate-x-1/2 -translate-y-1/2 bg-white z-10 shadow-none md:shadow-md'
            >
              <Image src={Ic_Switch} h={24} w={24} alt='switch button' />
            </Button>
            <div className='mt-5 md:mt-0'>
              <p className='text-sm font-medium mb-3'>Pergi ke</p>
              <div className='relative h-14 bg-[#e9e9e9] rounded flex items-center px-6 gap-4'>
                <Image src={Ic_Plane_Land} h={24} w={24} alt='destination' />
                {state.isOpen.searchReturn ? (
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: 'onchange',
                        payload: {
                          type: 'valueTo',
                          value: e.target.value,
                        },
                      })
                    }
                    onFocus={(e) => {
                      if (state.isOpen.searchDeparture) {
                        handleToggle('searchDeparture')
                      }
                      setSearchType('to')
                    }}
                    value={state.data.valueTo}
                    className='bg-transparent outline-none w-full'
                    autoFocus
                  />
                ) : (
                  <p
                    className='capitalize'
                    onClick={() => {
                      dispatch({
                        type: 'onchangeIsOpen',
                        payload: { type: 'searchReturn', value: true },
                      })
                      setSearchType('to')
                    }}
                  >
                    {state.data.to}{' '}
                    <span className='font-medium uppercase'>
                      ({state.data.destination})
                    </span>
                  </p>
                )}
              </div>
            </div>

            <SuggestionModal
              isOpen={state.isOpen.searchDeparture || state.isOpen.searchReturn}
              type={searchType}
              dispatch={dispatch}
              data={state.data}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-[1fr_128px] gap-8 items-end'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <p className='text-sm font-medium mb-3'>Berangkat</p>
                <div className='relative h-14 bg-[#e9e9e9] rounded flex items-center px-6 gap-4'>
                  <Button
                    className='text-slate-900'
                    onClick={() => handleToggle('date')}
                  >
                    {state.data.departureDate !== ''
                      ? state.data.departureDate.toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })
                      : null}

                    <Image
                      src='/icon/calendar.svg'
                      alt='departured date'
                      height={20}
                      width={20}
                      className='absolute right-4 top-1/2 -translate-y-1/2'
                    />
                  </Button>
                </div>
              </div>
              <div>
                <p className='text-sm font-medium mb-3'>Kembali</p>
                <div className='relative h-14 bg-[#e9e9e9] rounded flex items-center px-6 gap-4'>
                  {!state.data.isOneWay ? (
                    <Button
                      className='text-slate-900'
                      onClick={() => handleToggle('date')}
                    >
                      {state.data.returnDate !== ''
                        ? state.data.returnDate.toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })
                        : 'Pilih Tanggal'}
                    </Button>
                  ) : null}

                  {!state.data.isOneWay && (
                    <Image
                      src='/icon/calendar.svg'
                      alt='return date'
                      height={20}
                      width={20}
                      className='absolute right-4 top-1/2 -translate-y-1/2'
                    />
                  )}
                </div>
              </div>

              <DateModal
                isOpen={state.isOpen.date}
                isOneWay={state.data.isOneWay}
                toggleModal={() => handleToggle('date')}
                dispatch={dispatch}
              />
            </div>
            <Button
              onClick={handleSearch}
              className='h-14 rounded bg-[#4642FF] text-white font-medium shadow shadow-[#4642FF]/20 text-sm flex items-center justify-center gap-2'
            >
              Cari Tiket
              <Image
                src='/icon/search-md-white.svg'
                as='image'
                alt='search ticket icon'
                height={16}
                width={16}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
