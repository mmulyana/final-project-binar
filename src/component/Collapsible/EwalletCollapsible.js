import React from 'react'
import withCollapsible from './withCollapsible'
import Image from 'next/image'

function Ewallet() {
  return (
    <div className='mt-[2px] bg-white p-2 rounded border flex flex-col gap-3'>
      {wallets.map((wallet, index) => (
        <div key={index} className='flex gap-3 items-center hover:bg-gray-400/10 py-3 px-2 rounded cursor-pointer'>
          <Image
            src={wallet.img}
            height={24}
            width={24}
            alt={`logo ${wallet.name}`}
          />
          <p>{wallet.name}</p>
        </div>
      ))}
    </div>
  )
}

const wallets = [
  {
    img: '/icon/dana.png',
    name: 'dana',
  },
  {
    img: '/icon/ovo.webp',
    name: 'ovo',
  },
  {
    img: '/icon/gopay.png',
    name: 'gopay',
  },
]

const EwalletCollapsible = withCollapsible(Ewallet)
export default EwalletCollapsible
