import Image from 'next/image'
import React, { useMemo } from 'react'
import Button from '../Button'
import Link from 'next/link'
import { changeToRupiah, convertToHoursMinutes } from '@/utils'

export default function Ticket({ data, query, handleDetail }) {
  const url = useMemo(() => {
    return `/checkout/order?a=${query?.a}&k=${query?.k}&b=${query?.b}&id=${data.id}`
  }, [query, data.id])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[600px_1fr] bg-gray-50 rounded-lg overflow-hidden hover:shadow'>
      {/* left */}
      <div className='grid grid-cols-[1fr_2fr] items-end'>
        <div className='p-4'>
          <div>
            <p className='text-slate-800'>{data.airline}</p>
          </div>
          <div className='mt-3'>
            <p className='text-xs text-slate-400 font-light'>Kelas</p>
            <p className='text-sm lowercase first-letter:uppercase'>
              {data.class}
            </p>
          </div>
          <div className='mt-3'>
            <p className='text-xs text-slate-400 font-light'>Fasilitas</p>
            <div className='text-slate-800 text-sm mt-1'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V13.5M16 17.5V21M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21ZM12.8 17.5H17.7C17.98 17.5 18.12 17.5 18.227 17.4455C18.3211 17.3976 18.3976 17.3211 18.4455 17.227C18.5 17.12 18.5 16.98 18.5 16.7V14.3C18.5 14.02 18.5 13.88 18.4455 13.773C18.3976 13.6789 18.3211 13.6024 18.227 13.5545C18.12 13.5 17.98 13.5 17.7 13.5H12.8C12.52 13.5 12.38 13.5 12.273 13.5545C12.1789 13.6024 12.1024 13.6789 12.0545 13.773C12 13.88 12 14.02 12 14.3V16.7C12 16.98 12 17.12 12.0545 17.227C12.1024 17.3211 12.1789 17.3976 12.273 17.4455C12.38 17.5 12.52 17.5 12.8 17.5Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between p-4 mb-2'>
          <div className='text-left'>
            <p className='text-sm text-slate-500'>{data.departure_time}</p>
            <p className='text-2xl font-medium text-slate-800'>
              {data.departure_code}
            </p>
            <p className='text-sm text-slate-500'>{data.departure_city}</p>
          </div>
          <div className='grow relative h-10'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] lg:w-[200px] border border-dashed border-slate-300'>
              <div className='w-2 h-2 bg-blue-600 rounded-full absolute flex items-center justify-center -top-1/2 -translate-y-1/2 -left-1' />
              <div className='w-2 h-2 bg-blue-200 rounded-full absolute flex items-center justify-center -top-1/2 -translate-y-1/2 -right-1' />
              <Image
                src='/icon/plane-ticket.svg'
                alt='duration in plane'
                height={32}
                width={32}
                className='absolute left-1/2 -top-1/2 -translate-y-1/2 -translate-x-1/2'
              />
              <p className='absolute w-16 top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded-full bg-yellow-400 text-slate-800'>
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
      {/* right */}
      <div className='relative bg-gray-300/10 lg:bg-gray-50 h-fit md:h-full'>
        <div className='h-fit lg:h-full w-full flex flex-row md:flex-col justify-between items-center md:items-end gap-4 md:gap-2 p-4'>
          <div className='text-right'>
            <p className='text-lg font-medium'>
              {changeToRupiah(data.price)}
              <span className='text-xs text-slate-400 font-normal'>/org</span>
            </p>
          </div>
          <div className='flex justify-between gap-5 md:w-full items-center'>
            <Button
              onClick={() => handleDetail(data.id)}
              className='text-sm text-[#4642FF] hover:text-[#3a37f0] block'
            >
              Detail
            </Button>
            <Link
              href={url}
              className='px-6 pt-[6px] py-1 bg-[#4642FF] hover:bg-[#3a37f0] text-white rounded text-sm uppercase text-center'
            >
              Pilih
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
