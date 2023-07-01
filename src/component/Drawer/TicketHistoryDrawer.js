import React, { useEffect, useState } from 'react'
import withDrawer from './withDrawer'
import Button from '../Button'
import api from '@/services/api'

function TicketHistory({ onClose, ...props }) {
  
  return (
    <div className='px-4'>
      <div className='flex items-center justify-start gap-4 py-3 '>
        <Button onClick={onClose} className='text-slate-400 text-sm p-2 hover:bg-gray-100/80 rounded'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 17L13 12L18 7M11 17L6 12L11 7'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      </div>
      
    </div>
  )
}

const TicketHistoryDrawer = withDrawer(TicketHistory)
export default TicketHistoryDrawer
