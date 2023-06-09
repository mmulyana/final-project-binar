import React from 'react'

export default function Textfield({ name, value, onChange, ...props }) {
  return (
    <div
      className={[
        'relative h-12 w-full rounded bg-[#F4F4F4] px-4 flex items-center',
        props.disabled ? 'text-gray-400' : '',
      ].join(' ')}
    >
      <input
        name={name}
        value={value}
        id={props.id}
        {...props}
        className='bg-transparent outline-none w-full'
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
    </div>
  )
}
