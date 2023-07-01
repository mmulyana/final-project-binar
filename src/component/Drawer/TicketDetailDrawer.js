import { useEffect, useState } from 'react'
import withDrawer from './withDrawer'
import Button from '../Button'
import api from '@/services/api'

function TicketDetail({ onClose, ...props }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getFlight(id) {
      try {
        const { data } = await api(`/flights/${id}`)
        setData(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFlight(props.id)
    return () => setData(null)
  }, [props.id])
  return (
    <div className='px-4'>
      <div className='flex items-center justify-start gap-4 py-3 border-b border-gray-200'>
        <Button
          onClick={onClose}
          className='text-slate-400 text-sm p-2 bg-gray-50 hover:bg-gray-100/80 rounded'
        >
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
      <div className='pt-4'>
        <h1>{data?.departure.city}</h1>
      </div>
    </div>
  )
}

const TicketDetailDrawer = withDrawer(TicketDetail)
export default TicketDetailDrawer
