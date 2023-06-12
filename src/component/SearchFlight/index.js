import { useEffect, useMemo, useReducer, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import { initialValue, searchReducer } from './reducer'

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

export default function SearchFlight() {
  const [state, dispatch] = useReducer(searchReducer, initialValue)
  const [searchType, setSearchType] = useState('')
  const router = useRouter()

  function handleToggle(payload) {
    dispatch({ type: 'toggle', payload })
  }

  function handleSearch() {
    console.log(state.data)
    router.push(`/result?departure=${state.data.from}&destination=${state.data.to}&departureDate=${state.data.departureDate.getDate()}`)
  }

  const sumPassenger = useMemo(() => {
    return Object.values(state.data.passengers).reduce((acc, obj) => acc + obj, 0)
  }, [state.data.passengers])

  useEffect(() => {
    dispatch({type: 'onchange', payload: {
      type: 'departureDate',
      value: new Date()
    }})
  }, [])

  return (
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
              {sumPassenger} <span className='font-normal'>Penumpang,</span> {state.data.seatClass}
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
              <input
                onFocus={() => {
                  dispatch({
                    type: 'onchangeIsOpen',
                    payload: { type: 'search', value: true },
                  })
                  setSearchType('from')
                }}
                onChange={(e) =>
                  dispatch({
                    type: 'onchange',
                    payload: {
                      type: 'from',
                      value: e.target.value,
                    },
                  })
                }
                value={state.data.from}
                className='bg-transparent outline-none w-full'
              />
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
              <input
                onFocus={() => {
                  dispatch({
                    type: 'onchangeIsOpen',
                    payload: { type: 'search', value: true },
                  })

                  setSearchType('to')
                }}
                onChange={(e) =>
                  dispatch({
                    type: 'onchange',
                    payload: {
                      type: 'to',
                      value: e.target.value,
                    },
                  })
                }
                value={state.data.to}
                className='bg-transparent outline-none w-full'
              />
            </div>
          </div>

          <SuggestionModal
            isOpen={state?.isOpen.search}
            toggleModal={() => handleToggle('search')}
            type={searchType}
            dispatch={dispatch}
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
                  {state.data.departureDate !== '' ? state.data.departureDate.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }) : null}

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
  )
}
