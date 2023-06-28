import React from 'react'

export default function SelectWithCheckbox({ name, isChecked, onClick }) {
  return (
    <div className='flex items-center justify-between px-1' onClick={onClick}>
      <p className='text-slate-500'>{name}</p>

      <div
        className={[
          'h-4 w-4 rounded',
          isChecked ? 'bg-blue-500' : 'bg-gray-100',
        ].join(' ')}
      />
    </div>
  )
}
