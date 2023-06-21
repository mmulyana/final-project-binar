import React, { forwardRef } from 'react'
import Button from '../Button'

const NotificationModal = forwardRef((props, ref) => {
  const { data } = props
  return (
    <div
      ref={ref}
      className='absolute top-9 right-0 w-[400px] h-20 rounded-lg bg-white p-4 '
    >
      <div className='flex justify-between items-center pb-2 border-b border-gray-200'>
        <p className='text-slate-600 text-sm'>Notifikasi</p>
        <Button className='text-[#326BF1] text-xs'>Sudah dibaca</Button>
      </div>
    </div>
  )
})

NotificationModal.displayName = 'NotificationModal'

export default NotificationModal