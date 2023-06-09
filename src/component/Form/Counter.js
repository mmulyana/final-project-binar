import React, { useState } from 'react'
import Button from '../Button'
import Image from 'next/image'

export default function Counter({ counter, inc, dec, handleChange }) {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div className='flex items-center'>
      <Button
        onClick={dec}
        className='h-7 w-7 rounded-full bg-transparent hover:bg-gray-100 flex items-center justify-center text-gray-600'
      >
        <Image src='/icon/minus.svg' alt='decrement counter' height={16} width={16} />
      </Button>
      <div className='h-10 w-8 text-slate-800 font-medium flex items-center justify-center overflow-hidden'>
        {!isFocus ? (
          <p onClick={() => setIsFocus(!isFocus)}>{counter}</p>
        ) : (
          <input
            className='w-8 px-1 outline-none'
            value={counter}
            onChange={handleChange}
            onBlur={() => setIsFocus(false)}
            autoFocus
            type='number'
            maxLength={10}
          />
        )}
      </div>
      <Button
        onClick={inc}
        className='h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600'
      >
        <Image src='/icon/plus.svg' alt='increment button' height={16} width={16} />
      </Button>
    </div>
  )
}
