import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import api from '@/services/api'

import Button from '@/component/Button'
import Destination from '@/component/Destination'
import { SecondaryLayout } from '@/component/Layout'
import { Ticket } from '@/component/Ticket'
import {
  compareTime,
  filterByAirline,
  filterByBetweenTime,
  getAirlineActives,
  getCityByIata,
} from '@/utils'
import {
  AirlineFilterCollapsible,
  TimeFilterCollapsible,
} from '@/component/Collapsible'
import SortingModal from '@/component/Modal/SortingModal'

import Img_empty from 'public/image/empty-result.svg'
import Img_loading from 'public/image/loading-result.svg'
import { dataAirline, dataFilterTime } from '@/utils/local'
import TicketDetailDrawer from '@/component/Drawer/TicketDetailDrawer'
import { useTranslation } from 'react-i18next'

function Result() {
  const router = useRouter()
  const [flights, setFlights] = useState(null)
  const [query, setQuery] = useState(null)
  const [filterByDTime, setFilterByDTime] = useState(dataFilterTime)
  const [filterByATime, setFilterByATime] = useState(dataFilterTime)
  const [filterAirline, setFilterAirline] = useState(dataAirline)
  const [isActiveFilter, setIsActiveFilter] = useState(false)
  const [type, setType] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState('')
  const { t } = useTranslation()

  useEffect(() => {
    if (router.isReady) {
      setQuery(router.query)
    }
  }, [router.isReady, router.query])

  useEffect(() => {
    if (query === null) return
    getFlight(query)
    if(query.iow === 'false') {
      getFlightReverse(query)
    }
    return () => setFlights([])
  }, [query])

  async function getFlight(query) {
    try {
      const body = {
        origin_airport: query.or,
        destination_airport: query.ds,
        flight_date: query.dd,
        passenger_cnt: parseInt(query.c),
      }
      const { data } = await api.post('/flights', body)
      setFlights(data.data)
    } catch (err) {
      console.log(err)
    }
  }
  async function getFlightReverse(query) {
    try {
      const body = {
        origin_airport: query.ds,
        destination_airport: query.or,
        flight_date: query.dr,
        passenger_cnt: parseInt(query.c),
      }
      const { data } = await api.post('/flights', body)
      setFlights(prev => [...prev, ...data.data])
    } catch (err) {
      console.log(err)
    }
  }

  const flightsFiltered = useMemo(() => {
    if (!flights) return
    let tmp = [...flights]
    let res = []
    const activeAirlines = getAirlineActives(filterAirline)
    if (activeAirlines.length > 0) {
      res = filterByAirline(tmp, activeAirlines)
    }

    const activeDepartureTime = filterByDTime.filter(
      (time) => time.isActive == true
    )
    if (activeDepartureTime.length > 0) {
      let data = res.length > 0 ? [...res] : [...tmp]
      let tmpLocal = filterByBetweenTime(
        data,
        activeDepartureTime[0].fromTime,
        activeDepartureTime[0].toTime,
        'd'
      )
      res = [...tmpLocal]
    }

    const activeArrivalTime = filterByATime.filter(
      (time) => time.isActive == true
    )
    if (activeArrivalTime.length > 0) {
      let data = res.length > 0 ? [...res] : [...tmp]
      let tmpLocal = filterByBetweenTime(
        data,
        activeArrivalTime[0].fromTime,
        activeArrivalTime[0].toTime,
        'a'
      )
      res = [...tmpLocal]
    }

    return res
  }, [flights, filterAirline, filterByDTime, filterByATime])

  function handleDetail(id) {
    setIsOpen(true)
    setId(id)
  }

  if (!query) return <></>

  return (
    <>
      <Destination query={query} />
      <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[320px_820px] justify-between md:gap-4 gap-y-6 mt-4 max-w-[1200px] mx-auto px-4 lg:px-0'>
        <div className='h-fit'>
          <div className='flex justify-between items-center'>
            <p className='text-lg'>Filter</p>
            {!!isActiveFilter && (
              <Button
                className='text-blue-800 text-sm font-medium'
                onClick={() => {
                  setFilterAirline(dataAirline)
                  setFilterByDTime(dataFilterTime)
                  setFilterByATime(dataFilterTime)
                  setIsActiveFilter(false)
                }}
              >
                Reset
              </Button>
            )}
          </div>
          <div className='bg-white mt-2 rounded h-fit px-4'>
            <TimeFilterCollapsible
              name={t('result_filter_time')}
              dataD={filterByDTime}
              dataA={filterByATime}
              setDataD={setFilterByDTime}
              setDataA={setFilterByATime}
              isActiveFilter={isActiveFilter}
              setIsActiveFilter={setIsActiveFilter}
              locale={router.locale}
            />
            <hr />
            <AirlineFilterCollapsible
              name={t('result_filter_airline')}
              data={filterAirline}
              setData={setFilterAirline}
              isActiveFilter={isActiveFilter}
              setIsActiveFilter={setIsActiveFilter}
            />
          </div>
        </div>
        <div className='h-fit'>
          <div className='grid grid-cols-3 gap-2 md:gap-6'>{/* time */}</div>
          <div>
            <div className='flex justify-between'>
              <p className='text-sm text-slate-600'>
                {t('result_ticket_title_1')}
                <span className='text-slate-800 font-semibold'>
                  {flights
                    ? flights.length > 0
                      ? flights.length
                      : null
                    : null}
                </span>{' '}
                {t('result_ticket_title_2')}
                <span className='text-slate-800 font-semibold'>
                  {getCityByIata(query.ds)}
                </span>{' '}
                {t('result_ticket_title_3')}
              </p>
              <SortingModal setData={setType} locale={router.locale} />
            </div>
            <div className='flex flex-col gap-6 mt-3'>
              {/* ticket */}
              {flights ? (
                flights.length > 0 && !isActiveFilter ? (
                  <SortingTicket
                    type={type}
                    query={query}
                    data={flights}
                    handleDetail={handleDetail}
                  />
                ) : flightsFiltered.length > 0 ? (
                  <SortingTicket
                    type={type}
                    query={query}
                    data={flightsFiltered}
                    handleDetail={handleDetail}
                  />
                ) : (
                  <div className='flex justify-center items-center flex-col'>
                    <Image
                      src={Img_empty}
                      className='max-w-[320px] pr-5'
                      alt='empty ticket image'
                    />
                    <p className='text-lg text-slate-800 font-medium -mt-3'>
                      Tiket yang kamu inginkan tidak ada😭
                    </p>
                  </div>
                )
              ) : (
                <div className='flex justify-center items-center flex-col pt-4'>
                  <Image
                    src={Img_loading}
                    className='max-w-[320px]'
                    alt='loading image'
                  />
                  <p className='text-lg text-slate-800 font-medium mt-2'>
                    Tunggu sebentar ya🫣
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!!isOpen && (
        <TicketDetailDrawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          id={id}
          query={query}
          locale={router.locale}
        />
      )}
    </>
  )
}

Result.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Result

function SortingTicket({ type, data, query, handleDetail }) {
  if (!data) {
    return <p>loading</p>
  }

  switch (type) {
    case 'DSC':
      return data
        .sort((a, b) => b.price - a.price)
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
    case 'EARLIEST-D':
      return data
        .sort((a, b) => compareTime(a, b, 'd', true))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
    case 'LATEST-D':
      return data
        .sort((a, b) => compareTime(a, b, 'd', false))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
    case 'EARLIEST-A':
      return data
        .sort((a, b) => compareTime(a, b, 'a', true))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
    case 'LATEST-A':
      return data
        .sort((a, b) => compareTime(a, b, 'a', false))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
    case 'SHORTEST_DURATION':
      return data
        .sort((a, b) => a.flight_duration - b.flight_duration)
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
    case 'ASC':
    default:
      return data
        .sort((a, b) => a.price - b.price)
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} handleDetail={handleDetail}/>
        ))
  }
}
