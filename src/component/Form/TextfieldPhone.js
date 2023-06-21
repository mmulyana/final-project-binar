import Image from 'next/image'
import React from 'react'
import Img_ID from 'public/image/indonesia.svg'

export default function TextfieldPhone({ name, value, onChange, ...props }) {
  return (
    <div>
      <label
        className='text-xs text-gray-700 mb-1 block font-medium capitalize'
      >
        No. handphone
      </label>
      <div className='relative h-12 w-full rounded bg-[#F4F4F4] pl-[88px] pr-4 flex items-center'>
        <div className='absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2'>
          <Image src={Img_ID} width={22} height={16} alt='indonesia flag' />
          <p>+62</p>
        </div>
        <input
          type='tel'
          name={name}
          value={value}
          className='bg-transparent outline-none w-full'
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  )
}
