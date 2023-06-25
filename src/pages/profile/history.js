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
  const [detail, setDetail] = useState(null)
  const { user } = useSelector(selectAuth)

  async function getTransaction(id) {
    if (!id) return
    try {
      const jwt = Cookies.get('jwt')
      const { data } = await api(`/transactions/${id}`, {
        headers: {
          Authorization: jwt,
        },
      })
      if (data.status) {
        setTransactions(data.data)
      }
    } catch (err) {}
  }

  function handleClick(id) {
    const transaction = transactions.filter(
      (transaction) => transaction.id === id
    )
    setDetail(transaction[0])
    setIsOpen(true)
  }

  function handleClose() {
    setDetail(null)
    setIsOpen(false)
  }

  useEffect(() => {
    if (!user) return
    getTransaction(user?.id)
  }, [user])

  return (
    <>
      <div className='max-w-[540px] flex flex-col gap-5'>
        {transactions.map((transaction, index) => (
          <TicketHistory
            data={transaction}
            key={index}
            handleClick={handleClick}
            id={user.id}
          />
        ))}
      </div>
      <TicketHistoryDrawer isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

History.getLayout = (page) => {
  return <ProfileLayout location='history'>{page}</ProfileLayout>
}

History.auth = { hasLoggedIn: true }

export default History
