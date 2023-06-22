import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import {
  changeToRupiah,
  convertDateTicket,
  convertToHoursMinutes,
} from '@/utils'

export default function Ticket({ data, query }) {
  return (
    <div className='ticket'>
      <div>
        <div className='h-9 w-full bg-teal-700 px-4 flex items-center justify-between text-sm text-white'>
          <p>{data.flight_number}</p>
          <p>{data.airline_code}</p>
        </div>
        <div className='flex items-center justify-between px-4 mt-2'>
          <div>
            <p className='text-xs text-slate-400 font-light'>
              Maskapai penerbangan
            </p>
            <p className='text-slate-800'>{data.airline}</p>
          </div>
          <div className='text-right'>
            <p className='text-xs text-slate-400 font-light'>Keberangkatan</p>
            <p className='text-sm'>
              {convertDateTicket('id-ID', data.flight_date)}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between mt-4 px-4 pb-6'>
          <div className='text-left'>
            <p className='text-2xl font-medium mt-2 text-slate-800'>
              {data.departure_code}
            </p>
            <p className='text-sm text-slate-500'>{data.departure_city}</p>
          </div>
          <div className='grow relative h-10'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] lg:w-[256px] border border-dashed border-slate-300'>
              <div className='w-2 h-2 rounded-full border border-slate-500 -top-1/2 -translate-y-1/2 bg-white absolute -left-1'></div>
              <div className='w-2 h-2 rounded-full border border-slate-600 -top-1/2 -translate-y-1/2 bg-slate-600 absolute -right-1'></div>
              <Image
                src='/icon/plane-ticket.svg'
                alt='duration in plane'
                height={32}
                width={32}
                className='absolute left-1/2 -top-1/2 -translate-y-1/2 -translate-x-1/2'
              />
              <p className='absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-gray-400'>
                {convertToHoursMinutes(data.flight_duration)}
              </p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-2xl font-medium mt-2 text-slate-800'>
              {data.arrival_code}
            </p>
            <p className='text-sm text-slate-500'>{data.arrival_city}</p>
          </div>
        </div>
      </div>
      <div className='relative bg-gray-50 h-24 md:h-full'>
        {/* <hr className='absolute -translate-y-1/2 -translate-x-1/2 top-0 lg:top-1/2 left-1/2 lg:left-[1px] w-[74%] border border-slate-200 border-dashed rotate-0 lg:rotate-90' /> */}
        <div className='h-9 w-full bg-white md:bg-teal-800 px-4 flex items-center justify-end text-sm text-slate-800 md:text-white'>
          <p className='text-xs'>{data.class}</p>
        </div>
        <div className='h-[calc(100%-36px)] w-full flex flex-row md:flex-col justify-between items-center md:items-end gap-4 md:gap-2 p-4'>
          <div className='text-right'>
            <p className='text-lg font-medium'>
              {changeToRupiah(data.price)}
              <span className='text-xs text-slate-400 font-normal'>/org</span>
            </p>
          </div>
          <div className='flex items-center justify-between gap-5 md:w-full'>
            <Button className='block text-sm'>Detail</Button>
            <Link
              href={`/checkout/order?adult=${query?.adult}`}
              className='px-6 py-1 bg-[#4642FF] text-white rounded text-sm uppercase text-center'
            >
              Pilih
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
