import { useEffect, useMemo, useState } from 'react'
import withDrawer from './withDrawer'
import Button from '../Button'
import api from '@/services/api'
import { convertDateTicket, convertToHoursMinutes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

function TicketDetail({ onClose, locale, ...props }) {
  const [data, setData] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    async function getFlight(id) {
      try {
        const { data } = await api(`/flights/${id}`)
        setData(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFlight(props.id)
    return () => setData(null)
  }, [props.id])

  const url = useMemo(() => {
    return `/checkout/order?a=${props.query?.a}&k=${props.query?.k}&b=${props.query?.b}&id=${data?.id}`
  }, [props.query, data])

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
      {data ? (
        <>
          <div className='pt-4'>
            <div className='flex gap-4 items-start'>
              {data ? (
                <Image
                  src={data?.airline.icon_url}
                  height={80}
                  width={80}
                  alt={data?.airline.name}
                />
              ) : null}
              <div>
                <p className='text-slate-800'>
                  {data?.airline.name}{' '}
                  <span className='text-slate-600'>
                    {data?.airline.iata_code}
                  </span>
                </p>
                <p className='text-xs text-slate-400'>{data?.airplane.model}</p>
              </div>
            </div>
            <div className='relative h-fit mt-6'>
              <div className='grid grid-cols-[1fr_2fr]'>
                <div className='relative'>
                  <p className='text-lg text-slate-800'>
                    {data?.departure_time}
                  </p>
                  <p className='text-xs text-slate-400'>
                    {convertDateTicket(locale === 'id' ? 'ID-id' : 'EN-en', data.flight_date)}
                  </p>
                </div>
                <div className='relative'>
                  <p className='text-lg text-slate-800'>
                    {`${data?.departure.city} (${data?.departure.iata_code})`}
                  </p>
                  <p className='text-sm text-slate-400 mt-1'>
                    {data?.departure.name}
                  </p>
                  <p className='text-sm text-slate-400 mt-1'>
                    {data?.departure_terminal_name}
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-[1fr_2fr] h-20'>
                <div />

                <div className='relative flex items-center'>
                  <p className='text-xs px-2 py-1 rounded-full bg-yellow-400 text-slate-800'>
                    {convertToHoursMinutes(data?.flight_duration)}
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-[1fr_2fr]'>
                <div className='relative'>
                  <p className='text-lg text-slate-800'>{data?.arrival_time}</p>
                  <p className='text-xs text-slate-400'>
                    {convertDateTicket(locale === 'id' ? 'ID-id' : 'EN-en', data.flight_date)}
                  </p>
                </div>

                <div className='relative'>
                  <p className='text-lg text-slate-800'>
                    {`${data?.arrival.city} (${data?.arrival.iata_code})`}
                  </p>
                  <p className='text-sm text-slate-400 mt-1'>
                    {data?.arrival.name}
                  </p>
                  <p className='text-sm text-slate-400 mt-1'>
                    {data?.arrival_terminal_name}
                  </p>
                </div>
              </div>
              <Image
                src='/icon/plane-ticket.svg'
                alt='duration in plane'
                height={32}
                width={32}
                className='absolute top-1/2 -translate-y-1/2 left-[23.8%] -translate-x-1/2 rotate-90 z-10'
              />
              <div className='absolute h-[calc(100%-3rem)] w-[1px] bg-slate-200 top-1/2 left-[24%] -translate-y-1/2 -translate-x-1/2'>
                <div className='w-4 h-4 bg-blue-200 rounded-full absolute left-1/2 -translate-x-1/2 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-blue-600 animate-pulse' />
                </div>
                <div className='w-4 h-4 bg-blue-200 rounded-full absolute left-1/2 bottom-0 -translate-x-1/2 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-blue-600 animate-pulse' />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4 grid grid-cols-[1fr_2fr] items-center text-sm'>
            <p className='text-slate-500'>{t('drawer_no')}</p>
            <p className='text-slate-800'>{data?.flight_number}</p>
          </div>
          <div className='mt-4 grid grid-cols-[1fr_2fr] items-center text-sm'>
            <p className='text-slate-500'>{t('drawer_class')}</p>
            <p className='text-slate-800 lowercase first-letter:uppercase'>
              {data?.class}
            </p>
          </div>
          <div className='mt-4 grid grid-cols-[1fr_2fr] items-start'>
            <div className='text-slate-500 text-sm'>
              <svg
                width='24'
                height='24'
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
            <div className='text-sm'>
              <p className='text-slate-500'>
                {t('drawer_beggage')}{' '}
                <span className='text-slate-800'>{data?.free_baggage} kg</span>
              </p>
              <p className='text-slate-500 mt-2'>
                {t('drawer_beggage_c')}{' '}
                <span className='text-slate-800'>{data?.cabin_baggage} kg</span>
              </p>
            </div>
          </div>
        </>
      ) : null}
      <Link
        href={url}
        className='absolute bottom-12 md:bottom-4 w-[calc(100%-2rem)] md:w-fit translate-x-1/2 lg:translate-x-0 right-1/2 lg:right-4 px-8 py-4 lg:py-2 pt-[18px] lg:pt-[10px] bg-[#4642FF] hover:bg-[#3a37f0] text-white rounded text-sm uppercase text-center'
      >
        {t('ticket_btn')}
      </Link>
    </div>
  )
}

const TicketDetailDrawer = withDrawer(TicketDetail)
export default TicketDetailDrawer
