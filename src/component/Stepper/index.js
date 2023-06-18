import React from 'react'

const initState = ['pesan', 'bayar', 'selesai']

export default function Stepper({ index }) {
  return (
    <div className='flex items-center justify-between gap-8'>
      <div className='flex items-center gap-2'>
        <div className='h-7 w-7 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs'>1</div>
        <p className='text-sm text-gray-800'>Pesan</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className={['h-7 w-7 rounded-full flex items-center justify-center text-xs', index >= 2 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-300'].join(' ')}>
          2
        </div>
        <p className={['text-sm', index >= 2 ? 'text-gray-800' : 'text-gray-400'].join(' ')}>Bayar</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className={['h-7 w-7 rounded-full flex items-center justify-center text-xs', index >= 3 ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-300'].join(' ')}>
          3
        </div>
        <p className={['text-sm', index >= 3 ? 'text-gray-800' : 'text-gray-400'].join(' ')}>Selesai</p>
      </div>
    </div>
  )
}
