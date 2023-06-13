import Image from 'next/image'
import React from 'react'
import Button from '../Button'

export default function Ticket({ data }) {
  return (
    <div className='ticket'>
      <div className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <Image
              src='/image/AirAsia.svg'
              alt='airline logo'
              height={24}
              width={24}
            />
            <p className='font-medium'>Air Asia</p>
          </div>
          <p className='text-sm'>Jumat, 16 Juni</p>
        </div>
        <div className='flex items-center justify-between mt-6'>
          <div className='text-left'>
            <p className='text-sm text-slate-500'>Jakarta</p>
            <p className='text-2xl font-medium mt-2 text-slate-600'>JKT</p>
            <p className='mt-2 text-sm'>10:00</p>
          </div>
          <div className='grow relative h-10'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[256px] border border-dashed border-[#C2C5CF]'>
              <div className='w-2 h-2 rounded-full border border-[#C2C5CF] -top-1/2 -translate-y-1/2 bg-white absolute -left-1'></div>
              <div className='w-2 h-2 rounded-full border border-[#C2C5CF] -top-1/2 -translate-y-1/2 bg-[#C2C5CF] absolute -right-1'></div>
              <Image
                src='/icon/plane-ticket.svg'
                alt='duration in plane'
                height={32}
                width={32}
                className='absolute left-1/2 -top-1/2 -translate-y-1/2 -translate-x-1/2'
              />
              <p className='absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-400'>
                1j 60m
              </p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-sm text-slate-500'>Yogyakarta</p>
            <p className='text-2xl font-medium mt-2 text-slate-600'>YOG</p>
            <p className='mt-2 text-sm'>18:50</p>
          </div>
        </div>
      </div>
      <div className='relative p-5 flex flex-row lg:flex-col w-full items-center justify-between lg:w-[calc(100%-24px)]'>
        <div className='absolute left-[calc(100%-16px)] lg:-left-[10px] -top-[16px] lg:-top-[10px] w-8 lg:w-5 h-8 lg:h-5 rounded-full bg-[#F0F1F6] ticket__circle' />
        <div className='absolute left-[calc(100%+2px)] lg:-left-[10px] -top-[16px] lg:-top-[18px] w-5 h-8 lg:h-4 bg-[#F0F1F6]' />

        <div className='absolute -left-[16px] lg:-left-[10px] bottom-[calc(100%-16px)] lg:-bottom-[10px] w-8 lg:w-5 h-8 lg:h-5 rounded-full bg-[#F0F1F6] ticket__circle' />
        <div className='absolute -left-[22px] lg:-left-[10px] bottom-[calc(100%-16px)] lg:-bottom-[18px] w-5 h-8 lg:h-4 bg-[#F0F1F6]' />

        <hr className='absolute -translate-y-1/2 -translate-x-1/2 top-0 lg:top-1/2 left-1/2 lg:left-0 w-[90%] lg:w-[60%] border border-dashed rotate-0 lg:rotate-90 ticket__divider'></hr>

        <div className='h-full w-full md:grow flex flex-col items-start md:items-end justify-center'>
          <p className='text-xl font-medium'>Rp 1.400.000</p>
          <p className='text-xs text-slate-300 mt-1 md:mt-2'>per orang</p>
        </div>
        <Button className='px-12 py-3 md:py-2 md:w-full bg-[#EFF0F3] hover:bg-[#4642FF] text-[#4642FF] hover:text-white rounded text-sm md:text-base font-medium'>
          Pilih
        </Button>
      </div>
    </div>
  )
}
