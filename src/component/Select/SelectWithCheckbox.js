import React from 'react'

export default function SelectWithCheckbox({ name, isChecked, onClick }) {
  return (
    <div className='flex items-center justify-between px-1' onClick={onClick}>
      <p className='text-slate-500 capitalize'>{name}</p>

      <div
        className={[
          'h-4 w-4 rounded flex items-center justify-center text-white',
          isChecked ? 'bg-blue-600' : 'bg-gray-100',
        ].join(' ')}
      >
        {!!isChecked && (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20 6L9 17L4 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </div>
    </div>
  )
}
