import TicketHistoryDrawer from '@/component/Drawer/TicketHistoryDrawer'
import { ProfileLayout } from '@/component/Layout'
import Ticket from '@/component/Ticket'
import React, { useState } from 'react'

function History() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <>
      <div className='flex flex-col gap-2'>
      </div>
      <TicketHistoryDrawer isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

History.getLayout = (page) => {
  return <ProfileLayout location='history'>{page}</ProfileLayout>
}

export default History
