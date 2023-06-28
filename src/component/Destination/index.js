import { getCityByIata, getDiffBetweenMonth, getMonthFromDate } from '@/utils'
import Image from 'next/image'
import Flight from 'public/image/flight.svg'
import Ic_Calendar from 'public/icon/calendar.svg'
import Button from '../Button'

export default function Destination({ query }) {
  return (
    <div className='h-fit w-full bg-white mt-20 pb-8 relative lg:sticky top-0 left-0 md:z-10 lg:z-50 border-t border-gray-200 shadow md:shadow-none'>
      <div className='max-w-[1200px] mx-auto md:px-0 flex flex-col md:flex-row w-full pt-5 items-start md:items-end justify-between px-4 lg:px-0 pb-4 md:pb-0'>
        <div className='flex gap-3 md:gap-6 items-start flex-col md:flex-row'>
          <Image h={50} w={50} src={Flight} alt='flight' />

          <div>
            <p className='text-[#131316]/60 text-sm md:text-base'>
              Silakan pilih keberangkatan penerbangan.
            </p>
            <div className='flex flex-row my-2 flex-wrap items-center gap-2'>
              <p className='text-base md:text-2xl text-medium text-[#131316]'>
                {getCityByIata(query?.or)}
              </p>{' '}
              <div className='text-[#326BF1]'>
                {query?.iow === 'true' ? (
                  <svg
                    width='20'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 12H19M19 12L12 5M19 12L12 19'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                ) : (
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                )}
              </div>
              <p className='text-base md:text-2xl text-medium text-[#131316]'>
                {getCityByIata(query?.ds)}
              </p>{' '}
              <div className='flex gap-2 items-center ml-4'>
                <Image
                  src={Ic_Calendar}
                  height='18'
                  width='18'
                  alt='calendar icon'
                />
                <p className='text-[#131316]/80 text-xs md:text-base'>
                  {!!query && `${query?.dd.split('-')[2]} `}
                  {query?.dr !== '0'
                    ? `${
                        getDiffBetweenMonth(query?.dd, query?.dr)
                          ? getMonthFromDate(query?.dd)
                          : ''
                      } - ${query?.dr.split('-')[2]} ${getMonthFromDate(
                        query?.dr
                      )}`
                    : getMonthFromDate(query?.dd)}
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='bg-[#CACBCF] rounded-full w-1 h-1'></div>
                <p className='text-[#131316]/80 text-sm md:text-base'>
                  {query?.c} Penumpang
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='bg-[#CACBCF] rounded-full w-1 h-1'></div>
                <p className='text-[#131316]/80 text-sm md:text-base'>
                  {query?.l}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button className='px-4 py-2 text-base rounded bg-[#EFF0F3] hover:bg-[#fbfbfb] text-[#326BF1] hover:text-[#3b76ff]'>
          Ganti Pencarian
        </Button>
      </div>
    </div>
  )
}
