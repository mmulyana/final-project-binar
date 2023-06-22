import React, { useState } from 'react'
import Button from '../Button'
import Image from 'next/image'

export default function TextfieldPassword({
  name,
  value,
  onChange,
  label,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <label
        className='text-xs text-gray-400 mb-1 block font-medium capitalize'
        htmlFor={props.id}
      >
        {label}
      </label>
      <div
        className={[
          'relative h-12 w-full rounded bg-[#F4F4F4] px-4 flex items-center',
          props.disabled ? 'text-gray-400' : '',
          props.className ?? ''
        ].join(' ')}
      >
        <input
          type={isOpen ? 'text' : 'password'}
          name={name}
          value={value}
          id={props.id}
          {...props}
          className='bg-transparent outline-none w-full bg-[#F4F4F4]'
          onChange={onChange}
        />
        <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Image
              src='/icon/eye-off.svg'
              height={24}
              width={24}
              alt='password'
            />
          ) : (
            <Image src='/icon/eye.svg' height={24} width={24} alt='password' />
          )}
        </div>
      </div>
    </div>
  )
}
