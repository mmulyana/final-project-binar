import Image from 'next/image'
import Link from 'next/link'
import Label from '../Label'
import Button from '../Button'
import {
  changeToRupiah,
  convertDateTicket,
  convertToHoursMinutes,
} from '@/utils'
import { useRouter } from 'next/router'

export default function TicketHistory({ data, onClick, id }) {
  const router = useRouter()

  function handlePayment() {
    sessionStorage.setItem('TMP_PAYMENT', JSON.stringify(data))
    router.push(`/checkout/payment?tr=${data.transaction_id}&us=${id}&ac=${data.arrival_city}&dc=${data.departure_city}&t=${data.total_bill}&c=${data.class}&or=${data.departure_code}&ds=${data.arrival_code}`)
  }

  return (
    <div className='bg-white rounded-lg overflow-hidden'>
      <div className='py-2 w-full bg-slate-900 px-4 flex items-center justify-between text-sm text-white relative'>
        <p>{data.flight_number}</p>
        <Label
          text={data.payment_status ? 'lunas' : changeToRupiah(data.total_bill)}
          state={data.payment_status ? 'success' : 'failed'}
        />
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
            {convertDateTicket('id-ID', data.flight_date)},{' '}
            {data.departure_time}
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

      <div className='flex justify-end items-center px-4 pb-4'>
        <Button
          className='block px-5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-sm text-slate-800'
          onClick={handlePayment}
        >
          Bayar
        </Button>
      </div>
    </div>
  )
}
