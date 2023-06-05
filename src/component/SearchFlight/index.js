import { useReducer } from 'react'
import Image from 'next/image'
import Button from '../Button'
import Slider from '../Form/Slider'
import DestinationModal from '../Modal/DestinationModal'
import PassengersModal from '../Modal/PassengersModal'
import SeatClassModal from '../Modal/SeatClassModal'
import { sumDataNumbers } from '@/utils'
import { initialValue, searchReducer } from './reducer'

import IconFlight from 'public/icon/material-flight-takeoff.svg'
import IconReverse from 'public/icon/play-cycle.svg'
import IconDate from 'public/icon/material-date.svg'
import IconPassenger from 'public/icon/material-airline-seat.svg'
import DateModal from '../Modal/DateModal'

export default function SearchFlight() {
  const [state, dispatch] = useReducer(searchReducer, initialValue)

  function handleToggle(payload) {
    dispatch({ type: 'toggle', payload })
  }

  return (
    <div className='bg-white rounded-xl max-w-[968px] h-fit border border-neutral-2 mx-auto mt-20 shadow-high'>
      <div className='p-6'>
        <h4 className='heading-20-bold'>
          Pilih Jadwal Penerbangan spesial di{' '}
          <span className='text-primary-purple-4'>Tiketku</span>
        </h4>

        {/* destination */}
        <div className='mt-6 gap-4 md:gap-[100px] relative grid grid-cols-1 md:grid-cols-2 h-fit md:h-[61px]'>
          {/* from */}
          <div className='grid grid-cols-[60px_1fr] md:grid-cols-[70px_1fr] gap-[29px] items-start'>
            <div className='flex items-center gap-3'>
              <Image src={IconFlight} width={24} height={24} />
              <p className='body-14-regular text-neutral-3'>From</p>
            </div>
            <p
              className='body-14-medium cursor-pointer'
              onClick={() => handleToggle('search')}
            >
              {state?.data.from}
            </p>
          </div>

          {/* to */}
          <div className='grid grid-cols-[60px_1fr] md:grid-cols-[70px_1fr] gap-[29px] items-start'>
            <div className='flex items-center gap-3'>
              <Image src={IconFlight} width={24} height={24} />
              <p className='body-14-regular text-neutral-3'>To</p>
            </div>
            <p
              className='body-14-medium cursor-pointer'
              onClick={() => handleToggle('search')}
            >
              {state?.data.to}
            </p>
          </div>

          <Button
            className='h-8 w-8 rounded-xl border-[1.5px] border-primary-purple-4 bg-black flex items-center justify-center absolute right-0 top-1/3 md:left-1/2 -translate-x-1/2 -translate-y-1/2'
            onClick={() => {
              dispatch({ type: 'reverseDestination' })
            }}
          >
            <Image src={IconReverse} w={32} h={32} />
          </Button>

          <DestinationModal
            isOpen={state?.isOpen.search}
            toggleModal={() => handleToggle('search')}
            className='left-1/2 -translate-x-1/2 top-[448px]'
          />
        </div>

        {/* date */}
        <div className='mt-8 md:mt-2 gap-4 md:gap-24 grid grid-cols-1 md:grid-cols-2'>
          {/* Departure */}
          <div className='grid grid-cols-[60px_1fr] md:grid-cols-[70px_1fr] gap-[29px] relative'>
            <div className='flex items-center gap-2'>
              <Image src={IconDate} w={24} h={24} />
              <p className='body-14-regular text-neutral-3'>Date</p>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Departure
                </label>
                <p
                  className='body-14-medium cursor-pointer'
                  onClick={() => handleToggle('date')}
                >
                  {state?.data?.departureDate.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Return
                </label>
                <p
                  className={[
                    'body-14-medium cursor-pointer',
                    state.isReturnDate ? '' : 'text-primary-purple-4',
                  ].join(' ')}
                  onClick={() => handleToggle('date')}
                >
                  {state.isOpen.isReturnDate
                    ? state.data.returnDate
                      ? state.data.returnDate.toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })
                      : 'Pilih Tanggal'
                    : ''}
                </p>
              </div>

              <DateModal
                isOpen={state?.isOpen.date}
                toggleModal={() => handleToggle('date')}
              />
            </div>

            <Slider
              isChecked={state?.isOpen.isReturnDate}
              handleClick={() => handleToggle('isReturnDate')}
              className='absolute -right-10 -top-1 -translate-x-1/2'
            />
          </div>

          {/* Passengers */}
          <div className=' grid grid-cols-[60px_1fr] md:grid-cols-[70px_1fr] gap-[29px] mt-4 md:mt-0 relative'>
            <div className='flex items-center gap-2'>
              <Image src={IconPassenger} w={24} h={24} />
              <p className='body-14-regular text-neutral-3'>To</p>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Passengers
                </label>
                <p
                  className='body-14-medium cursor-pointer'
                  onClick={() => handleToggle('passenger')}
                >
                  {sumDataNumbers(state?.data.passengers)} Penumpang
                </p>
              </div>

              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Seat Class
                </label>
                <p
                  className='body-14-medium cursor-pointer'
                  onClick={() => handleToggle('passenger')}
                >
                  {state?.data.seatClass}
                </p>
              </div>
            </div>

            <PassengersModal
              toggleModal={() => handleToggle('passenger')}
              isOpen={state?.isOpen.passenger}
              className='right-4 md:right-[40px] lg:right-[170px] top-[540px]'
            />

            <SeatClassModal
              toggleModal={() => handleToggle('seatClass')}
              isOpen={state?.isOpen.seatClass}
              className='right-4 md:right-[170px] top-[540px]'
            />
          </div>
        </div>
      </div>
      <Button className='w-full h-12 bg-primary-purple-4 rounded-b-xl'>
        <p className='title-16-bold text-white'>Cari Penerbangan</p>
      </Button>
    </div>
  )
}
