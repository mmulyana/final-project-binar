import React, { forwardRef } from 'react'
import img_ID from 'public/icon/id.png'
import img_EN from 'public/icon/en.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LocaleModal = forwardRef((props, ref) => {
  const { setIsOpen } = props
  const router = useRouter()
  function handleClick(type) {
    if (type === 'id') {
      window.location = '/'
    } else {
      window.location = '/en'
    }
    setIsOpen(false)
  }
  return (
    <div
      ref={ref}
      className='absolute top-9 right-0 rounded-lg bg-white p-2 shadow w-fit flex flex-col gap-2'
    >
      <div
        className='flex gap-2 items-center hover:bg-gray-100 p-1 rounded cursor-pointer w-16'
        onClick={() => handleClick('id')}
      >
        <Image
          src={img_ID}
          alt='change to bahasa indonesia'
          width={24}
        />
        <p className='text-xs text-slate-800'>ID</p>
      </div>
      <div
        className='flex gap-2 items-center hover:bg-gray-100 p-1 rounded cursor-pointer w-16'
        onClick={() => handleClick('en')}
      >
        <Image src={img_EN} alt='change to english' width={24} />
        <p className='text-xs text-slate-800'>EN</p>
      </div>
    </div>
  )
})

LocaleModal.displayName = 'LocaleModal'

export default LocaleModal
