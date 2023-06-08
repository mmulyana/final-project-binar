import React, { useState } from 'react'
import Button from '../Button'
import Image from 'next/image'

export default function TextfieldPassword({ name, value, onChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={[
        'relative h-12 w-full rounded bg-[#F4F4F4] px-4 flex items-center',
        props.disabled ? 'text-gray-400' : '',
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
      <label
        className={[
          'absolute left-4 top-3 text-base text-gray-500 capitalize cursor-text',
          value !== '' ? 'hidden' : '',
        ].join(' ')}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Image src='/icon/eye-off.svg' height={24} width={24} alt='password' />
        ) : (
          <Image src='/icon/eye.svg' height={24} width={24} alt='password' />
        )}
      </div>
    </div>
  )
}
