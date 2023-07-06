import Image from 'next/image'
import React, { useState } from 'react'
import Label from '../Label'
import { useTranslation } from 'react-i18next'

export default function TicketBoardingPass({ data, transaction }) {
  const [isOpen, setIsOpen] = useState(false)
  const {t} = useTranslation()
  return (
    <div>
      <div
        className='w-full rounded-lg bg-white p-4 flex justify-between items-center relative cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-1 bg-blue-600' />
        <div>
          <p className='text-xs text-slate-400'>{t('boarding_name')}</p>
          <p className='text-sm text-slate-800'>{data.name}</p>
        </div>
        <Image height={40} width={40} alt='qr code' src={data.qr_image} />
      </div>
      {!!isOpen && (
        <div className='w-full h-fit bg-white rounded-lg shadow-inner shadow-gray-100 p-4 flex justify-between items-center'>
          <div>
            <p className='text-xs text-slate-400 mb-1'>{t('boarding_ticket')}</p>
            <p className='text-sm text-slate-800'>{data.ticket_code}</p>
          </div>
          
          <div className='text-right'>
            <p className='text-xs text-slate-400 mb-1'>status</p>
            <Label state='active' text='Aktif'/>
          </div>
          
        </div>
      )}
    </div>
  )
}
