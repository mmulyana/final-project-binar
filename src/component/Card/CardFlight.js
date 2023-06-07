import React from 'react'
import Image from 'next/image'
import imgCard from 'public/images/card.png'

export default function CardFlight({ data }) {
  return (
    <div className='card-flight'>
      <div className='card-flight__image'>
        <Image
          src={imgCard}
          h={400}
          w={400}
          className='w-full h-full object-cover rounded-b-lg'
        />
      </div>
      <div className='card-flight__desc'>
        <div className='card-flight__desc-top'>
          <div>
            <div className='flex gap-2 items-end'>
              <p className='text-sm capitalize'>{data.from}</p>
              <div className='card-flight__desc-corner'>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.5 2H3.2C4.88016 2 5.72024 2 6.36197 2.32698C6.92646 2.6146 7.3854 3.07354 7.67302 3.63803C8 4.27976 8 5.11984 8 6.8L8 10M8 10L5.5 7.5M8 10L10.5 7.5'
                    stroke='#424245'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <p className='card-flight__desc-to'>{data.to}</p>
          </div>
          <p className='text-sm'>
            {data.daparturedDate.split('-')[2].at(1)} -{' '}
            {data.arrivalDate.split('-')[2]}{' '}
            <span className='opacity-80'>maret</span>
          </p>
        </div>
        <div className='card-flight__desc-below'>
          <p className='text-sm'>{data.airline}</p>
          <div>
            <p className='opacity-80 text-xs'>mulai dari</p>
            <p>Rp {data.price}</p>
          </div>
        </div>
      </div>
      <div className='card-flight__layer' />
      <div className='card-flight__desc-layer' />
    </div>
  )
}
