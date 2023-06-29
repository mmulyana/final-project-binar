import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
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
import { flights } from '@/utils/local'

function Result() {
  const router = useRouter()
  const [flights, setFlights] = useState([])
  const [query, setQuery] = useState(null)
  const [filterByDepartureTime, setFilterByDepartureTime] =
    useState(dataFilterTime)
  const [filterByArrivalTime, setFilterByArrivalTime] = useState(dataFilterTime)
  const [filterAirline, setFilterAirline] = useState(dataAirline)
  const [isActiveFilter, setIsActiveFilter] = useState(false)
  const [type, setType] = useState('')

  useEffect(() => {
    if (router.isReady) {
      setQuery(router.query)
    }
  }, [router.isReady, router.query])

  useEffect(() => {
    if (query === null) return
    getFlight(query)
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

  const flightsFiltered = useMemo(() => {
    let tmp = [...flights]
    let res = []
    const activeAirlines = getAirlineActives(filterAirline)
    if (activeAirlines.length > 0) {
      res = filterByAirline(tmp, activeAirlines)
    }

    const activeDepartureTime = filterByDepartureTime.filter(
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

    const activeArrivalTime = filterByArrivalTime.filter(
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
  }, [flights, filterAirline, filterByDepartureTime, filterByArrivalTime])

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
                  setFilterByDepartureTime(dataFilterTime)
                  setFilterByArrivalTime(dataFilterTime)
                  setIsActiveFilter(false)
                }}
              >
                Reset
              </Button>
            )}
          </div>
          <div className='bg-white mt-2 rounded h-fit px-4'>
            <TimeFilterCollapsible
              name='waktu'
              dataD={filterByDepartureTime}
              dataA={filterByArrivalTime}
              setDataD={setFilterByDepartureTime}
              setDataA={setFilterByArrivalTime}
              isActiveFilter={isActiveFilter}
              setIsActiveFilter={setIsActiveFilter}
            />
            <hr />
            <AirlineFilterCollapsible
              name='Maskapai'
              data={filterAirline}
              setData={setFilterAirline}
              isActiveFilter={isActiveFilter}
              setIsActiveFilter={setIsActiveFilter}
            />
          </div>
        </div>
        <div className='h-fit'>
          <div className='grid grid-cols-3 gap-2 md:gap-6'>
            {/* time */}
          </div>
          <div>
            <div className='flex justify-between'>
              <p className='text-sm text-slate-600'>terdapat <span className='text-slate-800 font-medium'>{flights.length > 0 ? flights.length : null}</span> penerbangan menuju <span className='text-slate-800 font-medium'>{getCityByIata(query.ds)}</span> untuk kamu</p>
              <SortingModal setData={setType} />
            </div>
            <div className='flex flex-col gap-6 mt-3'>
              {/* ticket */}
              {flights ? (
                flights.length > 0 && !isActiveFilter ? (
                  flights.map((flight, index) => (
                    <SortingTicket type={type} query={query} data={flights} />
                  ))
                ) : flightsFiltered.length > 0 ? (
                  flightsFiltered.map((flight, index) => (
                    <SortingTicket
                      type={type}
                      query={query}
                      data={flightsFiltered}
                    />
                  ))
                ) : (
                  <p>empty filter</p>
                )
              ) : (
                <p>loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Result.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Result

const dataFilterTime = [
  {
    id: 1,
    isActive: false,
    fromTime: '06:00',
    toTime: '09:00',
    title: 'Pagi',
  },
  {
    id: 2,
    isActive: false,
    fromTime: '10:00',
    toTime: '12:00',
    title: 'Siang',
  },
  {
    id: 3,
    isActive: false,
    fromTime: '13:00',
    toTime: '20:00',
    title: 'Sore - Malam',
  },
]

const dataAirline = [
  {
    id: 1,
    isActive: false,
    title: 'citilink',
    value: 'citilink',
  },
  {
    id: 2,
    isActive: false,
    title: 'Batik air',
    value: 'batikair',
  },
  {
    id: 3,
    isActive: false,
    title: 'Garuda',
    value: 'garuda',
  },
]

function SortingTicket({ type, data, query }) {
  if (!data) {
    // return <>loading</>
  }

  switch (type) {
    case 'DSC':
      return data
        .sort((a, b) => b.price - a.price)
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
    case 'EARLIEST-D':
      return data
        .sort((a, b) => compareTime(a, b, 'd', true))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
    case 'LATEST-D':
      return data
        .sort((a, b) => compareTime(a, b, 'd', false))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
    case 'EARLIEST-A':
      return data
        .sort((a, b) => compareTime(a, b, 'a', true))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
    case 'LATEST-A':
      return data
        .sort((a, b) => compareTime(a, b, 'a', false))
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
    case 'SHORTEST_DURATION':
      return data
        .sort((a, b) => a.flight_duration - b.flight_duration)
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
    case 'ASC':
    default:
      return data
        .sort((a, b) => a.price - b.price)
        .map((flight, index) => (
          <Ticket query={query} data={flight} key={index} />
        ))
  }
}
