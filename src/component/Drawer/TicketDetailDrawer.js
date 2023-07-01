import { useEffect, useState } from 'react'
import withDrawer from './withDrawer'
import Button from '../Button'
import api from '@/services/api'
import { convertDateTicket, convertToHoursMinutes } from '@/utils'
import Image from 'next/image'

function TicketDetail({ onClose, ...props }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getFlight(id) {
      try {
        const { data } = await api(`/flights/${id}`)
        setData(data.data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getFlight(props.id)
    return () => setData(null)
  }, [props.id])
  return (
    <div className='px-4'>
      <div className='flex items-center justify-between gap-4 pt-5 pb-2 border-b border-gray-200'>
        <p className='text-slate-800'>Detail</p>
        <Button
          onClick={onClose}
          className='text-slate-400 text-sm p-1 hover:bg-gray-100/80 rounded'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 6L6 18M6 6L18 18'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      </div>
      <div className='pt-4'>
        <div className='flex gap-4 items-start'>
          <Image
            src={data?.airline.icon_url}
            height={80}
            width={80}
            alt={data?.airline.name}
          />
          <div>
            <p className='text-slate-800'>{data?.airline.name} <span className='text-slate-600'>{data?.airline.iata_code}</span></p>
            <p className='text-xs text-slate-400'>{data?.airplane.model}</p>
          </div>
        </div>
        <div className='relative h-fit mt-6'>
          <div className='grid grid-cols-[1fr_2fr]'>
            <div className='relative'>
              <p className='text-lg text-slate-800'>{data?.departure_time}</p>
              <p className='text-xs text-slate-400'>
                {!!data && convertDateTicket('ID-id', data.flight_date)}
              </p>
            </div>
            <div className='relative'>
              <p className='text-lg text-slate-800'>
                {`${data ? data?.departure.city : ''} ${
                  data ? '(' + data?.departure.iata_code + ')' : ''
                }`}
              </p>
              <p className='text-sm text-slate-400 mt-1'>
                {data?.departure.name}
              </p>
              <p className='text-sm text-slate-400 mt-1'>
                {data?.departure_terminal_name}
              </p>
            </div>
          </div>
          <div className='grid grid-cols-[1fr_2fr] h-32'>
            <div />

            <div className='relative flex items-center'>
              {!!data && (
                <p className='text-xs px-2 py-1 rounded-full bg-yellow-400 text-slate-800'>
                  {convertToHoursMinutes(data?.flight_duration)}
                </p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-[1fr_2fr]'>
            <div className='relative'>
              <p className='text-lg text-slate-800'>{data?.arrival_time}</p>
              <p className='text-xs text-slate-400'>
                {!!data && convertDateTicket('ID-id', data.flight_date)}
              </p>
            </div>

            <div className='relative'>
              <p className='text-lg text-slate-800'>
                {`${data ? data?.arrival.city : ''} ${
                  data ? '(' + data?.arrival.iata_code + ')' : ''
                }`}
              </p>
              <p className='text-sm text-slate-400 mt-1'>
                {data?.arrival.name}
              </p>
              <p className='text-sm text-slate-400 mt-1'>
                {data?.arrival_terminal_name}
              </p>
            </div>
          </div>
          {!!data && (
            <div className='absolute h-[calc(100%-3rem)] w-[1px] bg-slate-200 top-1/2 left-[24%] -translate-y-1/2 -translate-x-1/2'>
              <div className='w-[5px] h-[5px] bg-slate-600 rounded-full absolute left-1/2 -translate-x-1/2' />
              <div className='w-[5px] h-[5px] bg-slate-400 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const TicketDetailDrawer = withDrawer(TicketDetail)
export default TicketDetailDrawer
