import TimeFilterCollapsible from '@/component/Collapsible/TimeFilterCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import { Ticket } from '@/component/Ticket'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { filterTicketByPriceAndTime } from '@/utils/local'
import api from '@/services/api'
import Destination from '@/component/Destination'
import Button from '@/component/Button'
import AirlineFilterCollapsible from '@/component/Collapsible/AirlineFilterCollapsible'
import { filterByAirline, getAirlineActives } from '@/utils'

function Result() {
  const router = useRouter()
  const [flights, setFlights] = useState([])
  const [query, setQuery] = useState(null)
  const [filterTicketByPrice, setFilterTicketByPrice] = useState(
    filterTicketByPriceAndTime
  )
  const [filterByDepartureTime, setFilterByDepartureTime] = useState(
    dataFilterByDepartureTime
  )
  const [filterByArrivalTime, setFilterByArrivalTime] = useState(
    dataFilterByDepartureTime
  )
  const [filterAirline, setFilterAirline] = useState(dataAirline)
  const [isActiveFilter, setIsActiveFilter] = useState(false)

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

    return res
  }, [flights, filterAirline])

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
                onClick={() => setIsActiveFilter(false)}
              >
                Reset
              </Button>
            )}
          </div>
          <div className='bg-white mt-2 rounded h-fit px-4'>
            {/* filter sidebar */}
            <TimeFilterCollapsible
              name='waktu'
              dataD={filterByDepartureTime}
              dataA={filterByArrivalTime}
              setDataD={setFilterByDepartureTime}
              setDataA={setFilterByArrivalTime}
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
            {/* filter ticket 
            {filterTicketByPrice.map((data, index) => (
              <SelectFilter
                data={data}
                handleClick={handleFilterTicketByPrice}
                key={index}
              />
            ))} */}
          </div>
          <div>
            <div className='flex justify-end relative'>
              <Button className='flex items-center gap-2 text-gray-700'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 18L20 18M4 6L8 6M4 12L14 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <p className='text-gray-500 text-sm'>Urutkan</p>
              </Button>
            </div>
            <div className='flex flex-col gap-6 mt-3'>
              {/* ticket */}
              {flights ? (
                flights.length > 0 && !isActiveFilter ? (
                  flights.map((flight, index) => (
                    <Ticket query={query} data={flight} key={index} />
                  ))
                ) : flightsFiltered.length > 0 ? (
                  flightsFiltered.map((flight, index) => (
                    <Ticket query={query} data={flight} key={index} />
                  ))
                ) : (
                  <p>empty filter</p>
                )
              ) : isActiveFilter ? (
                <p>empty</p>
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

const dataFilterByDepartureTime = [
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
