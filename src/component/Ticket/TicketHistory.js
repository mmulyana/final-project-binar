import Image from 'next/image'
import Link from 'next/link'
import Label from '../Label'
import Button from '../Button'
import { changeToRupiah, convertToHoursMinutes } from '@/utils'

export default function TicketHistory({ data, onClick }) {
  return (
    <div className='w-full bg-white rounded-lg overflow-hidden shadow'>
      <div className='flex items-center justify-between relative px-6 pt-3 pb-2 bg-blue-950'>
        {/* <p className='font-medium text-white'>Air Asia</p> */}
        <p className='text-xs text-white'>No. Pesanan : JT-792</p>
        <Label state='success' text='berhasil' />
      </div>
      <div className='px-6 mt-8'>
        <div className='flex items-center justify-between'>
          <div className='text-left'>
            <p className='text-xs text-slate-600'>Jakarta</p>
            <p className='text-2xl font-medium mt-1 text-slate-800'>JKT</p>
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
                {convertToHoursMinutes(200)}
              </p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-xs text-slate-600'>Yogyakarta</p>
            <p className='text-2xl font-medium mt-1 text-slate-800'>YOG</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-6 px-6 mb-4'>
        <p className='text-sm text-slate-700'>{changeToRupiah(900000)}</p>
        <Button onClick={onClick} className='rounded  text-[#326BF1] hover:text-[#2457cd] text-[15px] font-medium'>
          Lihat
        </Button>
      </div>
    </div>
  )
}
