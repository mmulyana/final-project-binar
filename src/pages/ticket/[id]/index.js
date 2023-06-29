import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import api from '@/services/api'

import { SecondaryLayout } from '@/component/Layout'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import TicketBoardingPass from '@/component/Ticket/TicketBoardingPass'

export default function Ticket() {
  const router = useRouter()
  const [query, setQuery] = useState(null)
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    if (router.isReady) {
      setQuery(router.query)
    }
  }, [router.isReady])

  useEffect(() => {
    if (!query) return
    async function getTicket(id) {
      try {
        const jwt = Cookies.get('jwt')
        const { data } = await api(`tickets/${id}`, {
          headers: { Authorization: jwt },
        })

        if (data.status) {
          setTickets(data.data)
        }
      } catch (error) {
        toast.error(error.response.data)
      }
    }

    getTicket(query.id)
  }, [query])

  return (
    <div className='pt-20 max-w-[420px] mx-auto'>
      <h1 className='text-lg text-slate-800 text-center mt-4'>Boarding Pass</h1>
      <div className='flex flex-col gap-3 mt-4'>
        {tickets && tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <TicketBoardingPass
              key={index}
              data={ticket}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  )
}

Ticket.getLayout = (page) => <SecondaryLayout>{page}</SecondaryLayout>
