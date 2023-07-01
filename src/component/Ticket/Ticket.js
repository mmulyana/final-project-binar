import Image from 'next/image'
import React, { useMemo } from 'react'
import Button from '../Button'
import Link from 'next/link'
import {
  changeToRupiah,
  convertDateTicket,
  convertToHoursMinutes,
} from '@/utils'

export default function Ticket({ data, query, handleDetail }) {
  const url = useMemo(() => {
    return `/checkout/order?a=${query?.a}&k=${query?.k}&b=${query?.b}&id=${data.id}`
  }, [query, data.id])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[600px_1fr] bg-white rounded-lg overflow-hidden'>
      <div>
        <div className='h-9 w-full bg-teal-700 px-4 flex items-center justify-between text-sm text-white relative'>
          <p>{data.flight_number}</p>
          <p className='text-xs text-white block lg:hidden'>{data.class}</p>
        </div>
        <div className='flex items-center justify-between px-4 mt-2'>
          <div>
            <p className='text-xs text-slate-400 font-light'>
              Maskapai penerbangan
            </p>
            <p className='text-slate-800 text-sm mt-1'>{data.airline}</p>
          </div>
          <div className='text-right'>
            <p className='text-xs text-slate-400 font-light'>Keberangkatan</p>
            <p className='text-sm mt-1'>
              {convertDateTicket('id-ID', data.flight_date)}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between mt-4 px-4 pb-6'>
          <div className='text-left'>
            <p className='text-sm text-slate-500'>{data.departure_time}</p>
            <p className='text-2xl font-medium text-slate-800'>
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
              <p className='absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded-full bg-yellow-400 text-slate-800'>
                {convertToHoursMinutes(data.flight_duration)}
              </p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-sm text-slate-500'>{data.arrival_time}</p>
            <p className='text-2xl font-medium text-slate-800'>
              {data.arrival_code}
            </p>
            <p className='text-sm text-slate-500'>{data.arrival_city}</p>
          </div>
        </div>
      </div>
      <div className='relative bg-gray-50 h-fit md:h-full'>
        <div className='w-5 h-5 rounded-full bg-[#F0F1F6] absolute -top-[10px] -left-[10px]' />
        <div className='w-5 h-5 rounded-full bg-[#F0F1F6] absolute bottom-[calc(100%-10px)] lg:-bottom-[10px] left-[calc(100%-10px)] lg:-left-[10px]' />
        <hr className='absolute w-full border border-[#F0F1F6] border-dashed lg:rotate-90 top-[100px] -left-0 -translate-x-1/2 hidden lg:block' />
        <div className='h-9 w-full bg-white lg:bg-teal-700 px-4 items-center justify-end text-sm text-slate-800 hidden lg:flex'>
          <p className='text-xs text-white'>{data.class}</p>
        </div>
        <div className='h-[calc(100%-36px)] w-full flex flex-row md:flex-col justify-between items-center md:items-end gap-4 md:gap-2 p-4'>
          <div className='text-right'>
            <p className='text-lg font-medium'>
              {changeToRupiah(data.price)}
              <span className='text-xs text-slate-400 font-normal'>/org</span>
            </p>
          </div>
          <div className='flex items-center justify-between gap-5 md:w-full'>
            <Button
              onClick={() => handleDetail(data.id)}
              className='block text-sm'
            >
              Detail
            </Button>
            <Link
              href={url}
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
