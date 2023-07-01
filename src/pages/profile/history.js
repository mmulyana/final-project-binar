import TicketHistoryDrawer from '@/component/Drawer/TicketHistoryDrawer'
import { ProfileLayout } from '@/component/Layout'
import { TicketHistory } from '@/component/Ticket'
import { selectAuth } from '@/redux/reducers/auth'
import api from '@/services/api'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function History() {
  const [transactions, setTransactions] = useState([])
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
            id={user.id}
            withPrint
          />
        ))}
      </div>
    </>
  )
}


History.getLayout = (page) => {
  return <ProfileLayout location='history'>{page}</ProfileLayout>
}

History.auth = { hasLoggedIn: true }

export default History
