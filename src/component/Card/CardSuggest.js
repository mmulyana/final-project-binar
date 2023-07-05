import { imagesCities } from '@/utils/local'
import Image from 'next/image'

export default function CardSuggest({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6'>
      {data.slice(0,3).map((suggest, index) => (
        <div
          key={index}
          className='rounded-lg h-[200px] relative bg-white hover:shadow-sm overflow-hidden'
        >
          <Image
            src={imagesCities[suggest.flight.arrival.city.toLowerCase()]}
            height={400}
            width={400}
            className='h-full w-full rounded-l-md object-cover'
            alt={suggest.flight.arrival.city}
          />
          <div className='absolute top-0 left-0 h-full w-full bg-black/20 p-4 flex flex-col justify-end'>
            <h5 className='capitalize text-xl text-white'>
              {suggest.flight.arrival.city}
            </h5>
            <p className='text-white/80 text-sm'>{suggest.total_transaction} transaksi berhasil</p>
          </div>
        </div>
      ))}
    </div>
  )
}
