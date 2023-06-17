import React from 'react'

export default function SelectSeat({ data, handleSelect }) {
  return (
    <div className='p-8'>
      <div className='flex gap-2'>
        {data.map((data, index) => (
          <div key={index}>
            <div className='w-10 h-10 text-center'>
              <p>{data.row}</p>
            </div>
            <div className='flex flex-col gap-2'>
              {data.row !== ''
                ? data.col.map((col, index) => (
                    <div key={index} className='w-10 h-10 rounded bg-gray-300' />
                  ))
                : data.col.map((col, index) => (
                    <p key={index} className='w-10 h-10 flex items-center justify-center'>
                      {col+1}
                    </p>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
