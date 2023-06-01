import Image from 'next/image'
import Button from '../Button'
import SearchFlightModal from '../Modal/SearchFlightModal'
import { useState } from 'react'
import LayerModal from '../Modal/LayerModal'
import Slider from '../Form/Slider'

import IconFlight from 'public/icon/material-flight-takeoff.svg'
import IconReverse from 'public/icon/play-cycle.svg'
import IconDate from 'public/icon/material-date.svg'
import IconPassenger from 'public/icon/material-airline-seat.svg'

export default function SearchFlight() {
  const [isSearch, setIsSearch] = useState(false)
  const [isCheck, setIsCheck] = useState(false)

  function handleSearchToogle() {
    setIsSearch(!isSearch)
  }

  return (
    <div className='bg-white rounded-xl max-w-[968px] h-fit border border-neutral-2 mx-auto mt-20 shadow-high overflow-hidden'>
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
            <input
              onFocus={() => setIsSearch(true)}
              value='Jakarta (JKTA)'
              className='bg-transparent pb-[12px] border-b border-neutral-2 outline-none w-3/4 md:w-full'
            />
          </div>

          {/* to */}
          <div className='grid grid-cols-[60px_1fr] md:grid-cols-[70px_1fr] gap-[29px] items-start'>
            <div className='flex items-center gap-3'>
              <Image src={IconFlight} width={24} height={24} />
              <p className='body-14-regular text-neutral-3'>To</p>
            </div>
            <input
              value='Jakarta (JKTA)'
              onFocus={() => setIsSearch(true)}
              className='bg-transparent pb-[12px] border-b border-neutral-2 outline-none w-3/4 md:w-full'
            />
          </div>

          <Button className='h-8 w-8 rounded-xl border-[1.5px] border-primary-purple-4 bg-black flex items-center justify-center absolute right-0 top-1/3 md:left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Image src={IconReverse} w={32} h={32} />
          </Button>

          <SearchFlightModal
            isOpen={isSearch}
            toggleModal={handleSearchToogle}
            className='left-1/2 -translate-x-1/2 top-12'
          />
          <LayerModal isOpen={isSearch} handleToggle={handleSearchToogle} />
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
                <input
                  className='outline-none w-full bg-transparent pb-2 border-b border-neutral-2 text-black'
                  value='2023-03-01'
                  type='date'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Return
                </label>
                <input
                  className='outline-none w-full bg-transparent pb-2 border-b border-neutral-2 text-black'
                  value='2023-03-01'
                  type='date'
                />
              </div>
            </div>

            <Slider
              isChecked={isCheck}
              handleClick={() => setIsCheck(!isCheck)}
              className='absolute -right-10 -top-1 -translate-x-1/2'
            />
          </div>

          {/* Passengers */}
          <div className=' grid grid-cols-[60px_1fr] md:grid-cols-[70px_1fr] gap-[29px] mt-4 md:mt-0'>
            <div className='flex items-center gap-2'>
              <Image src={IconPassenger} w={24} h={24} />
              <p className='body-14-regular text-neutral-3'>To</p>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Passengers
                </label>
                <input
                  className='outline-none w-full bg-transparent pb-2 border-b border-neutral-2 text-black'
                  value='2 Penumpang'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='title-16-regular text-neutral-3'>
                  Seat Class
                </label>
                <input
                  className='outline-none w-full bg-transparent pb-2 border-b border-neutral-2 text-black'
                  value='Business'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button className='w-full h-12 bg-primary-purple-4'>
        <p className='title-16-bold text-white'>Cari Penerbangan</p>
      </Button>
    </div>
  )
}
