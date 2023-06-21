import TicketHistoryDrawer from '@/component/Drawer/TicketHistoryDrawer'
import { ProfileLayout } from '@/component/Layout'
import Ticket, { TicketHistory } from '@/component/Ticket'
import React, { useState } from 'react'

function History() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <>
      <div className='max-w-[540px] flex flex-col gap-5'>
        <TicketHistory onClick={() => setIsOpen(true)}/>
        <TicketHistory onClick={() => setIsOpen(true)}/>
      </div>
      <TicketHistoryDrawer isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

History.getLayout = (page) => {
  return <ProfileLayout location='history'>{page}</ProfileLayout>
}

export default History
