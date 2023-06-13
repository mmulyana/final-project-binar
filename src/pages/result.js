import TimeFilterCollapsible from '@/component/Collapsible/TimeFilterCollapsible'
import TransitFilterCollapsible from '@/component/Collapsible/TransitFilterCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import Button from '../component/Button'
import Image from 'next/image'
import Flight from 'public/image/flight.svg'
import Ic_Switch from 'public/icon/switch.svg'
import Ic_Calendar from 'public/icon/calendar.svg'
import Ellipse from 'public/icon/ellipse.svg'
import Ticket from '@/component/Ticket'
import React from 'react'

function Result() {
  return (
    <>
      <div className='h-fit md:h-[264px] w-full bg-white pt-[84px]'>
        <div className='max-w-[1200px] mx-auto px-4 md:px-0'>
          {/* flight destination */}
          <div className='flex flex-col md:flex-row w-full pt-5 md:pt-10 items-start md:items-center justify-between pb-4 md:pb-0'>
            <div className='flex gap-3 md:gap-6 items-start'>
              <Image className='' h={50} w={50} src={Flight} alt='flight' />

              <div className='col-span-9'>
                <p className='text-[#131316]/60 text-sm md:text-base'>
                  Silakan pilih keberangkatan penerbangan.
                </p>
                <div className='flex flex-row my-2 flex-wrap'>
                  <p className='text-base md:text-2xl text-medium text-[#131316]'>
                    Jakarta
                  </p>{' '}
                  <Image
                    className='mx-3'
                    src={Ic_Switch}
                    height='14'
                    width='14'
                    alt='switch icon'
                  />
                  <p className='text-base md:text-2xl text-medium text-[#131316]'>
                    Yogyakarta
                  </p>{' '}
                </div>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src={Ic_Calendar}
                      height='18'
                      width='18'
                      alt='calendar icon'
                    />
                    <p className='text-[#131316]/80 text-xs md:text-base'>
                      8 Juni - 4 Juli 2023
                    </p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='bg-[#CACBCF] rounded-full w-2 h-2'></div>
                    <p className='text-[#131316]/80 text-sm md:text-base'>5 Penumpang</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='bg-[#CACBCF] rounded-full w-2 h-2'></div>
                    <p className='text-[#131316]/80 text-sm md:text-base'>Ekonomi</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              // onClick={() => }
              className='ml-auto mt-8 md:ml-0 md:mt-0 px-4 md:px-6 py-2 md:py-4 rounded bg-[#EFF0F3] text-[#326BF1]'
            >
              Ganti Pencarian
            </Button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_820px] justify-between gap-y-6 mt-4 max-w-[1200px] mx-auto px-4 lg:px-0'>
        <div className='h-fit'>
          <p className='text-xl'>Filter</p>
          <div className='bg-white mt-4 rounded h-fit px-4'>
            {/* filter sidebar */}
            <TimeFilterCollapsible name='waktu' />
            <hr />
            <TransitFilterCollapsible name='Transit' />
          </div>
        </div>
        <div className='h-fit'>
          <div className='grid grid-cols-3 gap-6'>{/* filter ticket */}</div>
          <div className='flex flex-col gap-6'>
            {/* ticket */}
            <Ticket />
          </div>
        </div>
      </div>
    </>
  )
}
Result.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Result
