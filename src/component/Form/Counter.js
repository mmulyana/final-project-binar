import React, { useState } from 'react'
import Button from '../Button'

export default function Counter({ counter, inc, dec, handleChange }) {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div className='flex gap-1 items-center'>
      <Button
        onClick={dec}
        className='h-10 w-10 rounded border border-primary-purple-4 flex justify-center items-center hover:bg-primary-purple-4 duration-75 ease-in text-neutral-3 hover:text-white'
      >
        <p className='text-2xl'>-</p>
      </Button>
      <div className='h-10 w-[60px] rounded border border-neutral-2 flex items-center justify-center text-neutral-5 overflow-hidden px-2'>
        {!isFocus ? (
          <p onClick={() => setIsFocus(!isFocus)}>{counter}</p>
        ) : (
          <input
            className='w-full outline-none'
            value={counter}
            onChange={handleChange}
            onBlur={() => setIsFocus(false)}
            autoFocus
          />
        )}
      </div>
      <Button
        onClick={inc}
        className='h-10 w-10 rounded border border-primary-purple-4 flex justify-center items-center hover:bg-primary-purple-4 duration-75 ease-in text-neutral-3 hover:text-white'
      >
        <p className='text-2xl'>+</p>
      </Button>
    </div>
  )
}
