import { changeToRupiah } from '@/utils'
import React from 'react'

export default function SelectFilter({ data, handleClick }) {
  return (
    <div
      onClick={() => handleClick(data.id)}
      className={[
        'flex justify-between flex-col md:flex-row items-end bg-white rounded p-4 border flex-wrap cursor-pointer',
        data.isActive ? 'border-[#4642FF]' : 'border-gray-300',
      ].join(' ')}
    >
      <p className='text-sm'>{data.name}</p>
      <div className='text-right text-xs'>
        <p className='opacity-50 mb-2'>mulai dari</p>
        <p className='font-medium'>{changeToRupiah(data.price).slice(0, -3)}</p>
      </div>
    </div>
  )
}
