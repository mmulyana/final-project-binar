import React from 'react'
import withCollapsible from './withCollapsible'
import Image from 'next/image'

function Virtual() {
  return (
    <div className='mt-[2px] bg-white p-2 rounded border flex flex-col gap-3'>
      {banks.map((bank, index) => (
        <div key={index} className='flex gap-3 items-center hover:bg-gray-400/10 py-3 px-2 rounded cursor-pointer'>
          <Image
            src={bank.img}
            height={24}
            width={32}
            alt={`logo ${bank.name}`}
          />
          <p>{bank.name}</p>
        </div>
      ))}
    </div>
  )
}

const banks = [
    {
        img: '/icon/bca-va.png',
        name: 'BCA virtual account'
    },
    {
        img: '/icon/bri-va.png',
        name: 'BRI virtual account'
    },
    {
        img: '/icon/bni-va.png',
        name: 'BNI virtual account'
    },
]

const VirtualCollapsible = withCollapsible(Virtual)
export default VirtualCollapsible