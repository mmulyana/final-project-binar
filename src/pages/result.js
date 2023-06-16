import TimeFilterCollapsible from '@/component/Collapsible/TimeFilterCollapsible'
import TransitFilterCollapsible from '@/component/Collapsible/TransitFilterCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import Button from '../component/Button'
import Image from 'next/image'
import Flight from 'public/image/flight.svg'
import Ic_Switch from 'public/icon/switch.svg'
import Ic_Calendar from 'public/icon/calendar.svg'
import Ticket from '@/component/Ticket'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { filterTicketByPriceAndTime } from '@/utils/local'
import { SelectFilter } from '@/component/Select'

function Result() {
  const router = useRouter()
  const [query, setQuery] = useState(null)
  const [filterTicketByPrice, setFilterTicketByPrice] = useState(filterTicketByPriceAndTime)

  useEffect(() => {
    setQuery(router.query)
  }, [router])

  function handleFilterTicketByPrice(id) {
    const newFilterTickets = filterTicketByPrice
      .map((ticket) => {
        return { ...ticket, isActive: false }
      })
      .map((ticket) => {
        if (ticket.id === id) {
          return { ...ticket, isActive: true }
        }
        return ticket
      })

    setFilterTicketByPrice(newFilterTickets)
  }

  return (
    <>
      <div className='h-fit md:h-[264px] w-full bg-white pt-[84px]'>
        <div className='max-w-[1200px] mx-auto px-4 md:px-0'>
          {/* flight destination */}
          <div className='flex flex-col md:flex-row w-full pt-5 md:pt-10 items-start md:items-center justify-between px-4 lg:px-0 pb-4 md:pb-0'>
            <div className='flex gap-3 md:gap-6 items-start'>
              <Image className='' h={50} w={50} src={Flight} alt='flight' />

              <div className='col-span-9'>
                <p className='text-[#131316]/60 text-sm md:text-base'>
                  Silakan pilih keberangkatan penerbangan.
                </p>
                <div className='flex flex-row my-2 flex-wrap'>
                  <p className='text-base md:text-2xl text-medium text-[#131316]'>
                    {query?.departure}
                  </p>{' '}
                  <Image
                    className='mx-3'
                    src={Ic_Switch}
                    height='14'
                    width='14'
                    alt='switch icon'
                  />
                  <p className='text-base md:text-2xl text-medium text-[#131316]'>
                    {query?.destination}
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
                      {query?.departureDate}{' '}
                      {query?.type == 0 ? `- ${query?.returnDate}` : null}
                    </p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='bg-[#CACBCF] rounded-full w-2 h-2'></div>
                    <p className='text-[#131316]/80 text-sm md:text-base'>
                      {query?.adult} Penumpang
                    </p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='bg-[#CACBCF] rounded-full w-2 h-2'></div>
                    <p className='text-[#131316]/80 text-sm md:text-base'>
                      {query?.class}
                    </p>
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
      <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[320px_820px] justify-between md:gap-4 gap-y-6 mt-4 max-w-[1200px] mx-auto px-4 lg:px-0'>
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
          <div className='grid grid-cols-3 gap-2 md:gap-6'>
            {/* filter ticket */}
            {filterTicketByPrice.map((data, index) => (
              <SelectFilter
                data={data}
                handleClick={handleFilterTicketByPrice}
                key={index}
              />
            ))}
          </div>
          <div className='flex flex-col gap-6 mt-6'>
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
