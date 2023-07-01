import Image from 'next/image'
import Label from '../Label'
import Button from '../Button'
import { changeToRupiah, convertToHoursMinutes, formatTimestamp } from '@/utils'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function TicketHistory({ data, withPrint }) {
  const router = useRouter()

  function handlePayment() {
    router.push(
      `/checkout/payment?tr=${data.transaction_id}&us=${id}&ac=${data.arrival_city}&dc=${data.departure_city}&t=${data.total_bill}&c=${data.class}&or=${data.departure_code}&ds=${data.arrival_code}&tm=${data.transaction_date}`
    )
  }

  return (
    <div className='bg-white rounded-lg overflow-hidden w-full'>
      <div className='py-2 w-full px-4 flex items-center justify-between text-sm relative border-b border-gray-200 bg-gray-50'>
        <p className='text-slate-600'>No. pesanan {data.transaction_id}</p>
        <Label
          text={data.payment_status ? 'lunas' : changeToRupiah(data.total_bill)}
          state={data.payment_status ? 'success' : 'failed'}
        />
      </div>
      <div className={['grid grid-cols-[1fr_2fr]', withPrint ? '' : 'pb-4'].join(' ')}>
        <div className='flex flex-col gap-4 pt-4 pl-4'>
          <div className='text-xs text-left'>
            <p className='text-slate-400 font-light'>Maskapai</p>
            <p className='text-slate-800 text-sm'>{data.airline}</p>
          </div>
          <div>
            <p className='text-slate-400 font-light text-xs'>pembelian</p>
            <p className='text-slate-800 text-sm'>
              {formatTimestamp(data.transaction_date)}
            </p>
          </div>
        </div>

        <div className='flex items-center justify-between mt-2 px-4 pb-6'>
          <div className='text-left'>
            <p className='text-xl font-medium mt-2 text-slate-800'>
              {data.departure_code}
            </p>
            <p className='text-xs text-slate-500'>{data.departure_city}</p>
          </div>

          <div className='grow relative h-10'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] lg:w-[200px] border border-dashed border-slate-300'>
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
            <p className='text-xl font-medium mt-2 text-slate-800'>
              {data.arrival_code}
            </p>
            <p className='text-xs text-slate-500'>{data.arrival_city}</p>
          </div>
        </div>
      </div>

      {!withPrint ? null : (
        <div className='flex justify-end items-center bg-gray-50 px-4 py-2 border-t border-gray-200 mt-3'>
          {data.payment_status ? (
            <Link
              className='block px-5 py-1 rounded hover:bg-blue-600 text-sm text-blue-600 hover:text-white'
              href={`/ticket/${data.transaction_id}`}
            >
              Cetak
            </Link>
          ) : (
            <Button
              className='block px-5 py-1 rounded hover:bg-gray-200 text-sm text-slate-600'
              onClick={handlePayment}
            >
              Bayar
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
