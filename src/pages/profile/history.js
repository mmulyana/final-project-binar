import TicketHistoryDrawer from '@/component/Drawer/TicketHistoryDrawer'
import { ProfileLayout } from '@/component/Layout'
import { TicketHistory } from '@/component/Ticket'
import { selectAuth } from '@/redux/reducers/auth'
import api from '@/services/api'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function History() {
  const [isOpen, setIsOpen] = useState(false)
  const [transactions, setTransactions] = useState([])
  const { user } = useSelector(selectAuth)

  function handleClose() {
    setIsOpen(false)
  }

  async function getTransaction(id) {
    if(!id) return
    try {
      const jwt = Cookies.get('jwt')
      const { data } = await api(`/transactions/${id}`, {
        headers: {
          Authorization: jwt
        }
      })
      console.log(data)
    } catch(err) {

    }
  }

  useEffect(() => {
    getTransaction(user?.id)
  }, [])

  return (
    <>
      <div className='max-w-[540px] flex flex-col gap-5'>
        <TicketHistory onClick={() => setIsOpen(true)} />
        <TicketHistory onClick={() => setIsOpen(true)} />
      </div>
      <TicketHistoryDrawer isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

History.getLayout = (page) => {
  return <ProfileLayout location='history'>{page}</ProfileLayout>
}

export default History
