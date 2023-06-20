import React from 'react'
import withDrawer from './withDrawer'
import Button from '../Button'

function TicketHistory({ onClose, ...props }) {
  return (
    <div className='px-4'>
      <div className='flex items-center justify-between py-3 border-b border-gray-300'>
        <p>Detail</p>
        <Button onClick={onClose} className='text-red-500 text-sm'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 6L6 18M6 6L18 18'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      </div>

      {/* add below */}
      
    </div>
  )
}

const TicketHistoryDrawer = withDrawer(TicketHistory)
export default TicketHistoryDrawer
